const prompt = require('prompt-sync')({sigint: true});
const inputValidator = require('./validateInput');
const axios = require('axios');
const makeRequest = require('./make_request');

 async function main() {
    let command  = ''
    let successes = 0;
    let failures = 0;
    do {
       command = prompt('%'); 

       
       try{
         const validator = inputValidator(command);
         console.log(`Sending ${validator['-n']} requests with ${validator['-c']} concurrent requests to ${validator['-u']}`);

        const promises = [];
         for (let index = 0; index < validator['-n']; index +=  validator['-c']) {
            const batch = [];
            for(let j = 0; j<  validator['-c'] && index + j< validator['-n']; j++){
                batch.push(makeRequest(validator['-u']));
            }
            promises.push(Promise.allSettled(batch));
        }
        //  for (let i = 0; i < validator['-n']; i++) {
        //     let response = await axios.default.get(validator['-u']);
        //     console.log( 'Status Code:' + response.status);
        //     console.log(response.data);
        //  }

        const results = await Promise.all(promises);

        results.forEach((batchResult) => {
            batchResult.forEach((result) => {
              if (result.status === 'fulfilled') {
                successes++;
              } else {
                failures++;
                console.error(result.reason);
              }
            });
          });
          console.log(`successes: ${successes} \nfailures: ${failures}`);
       } catch(e){
            console.log(e);
        }
      
    } while (true);
}

main()