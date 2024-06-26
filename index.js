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
         console.log(`Sending ${validator['-n']} requests with ${validator['-c']} concurrent to ${validator['-u']}`);

        const promises = [];
         for (let index = 0; index < validator['-n']; index +=  validator['-c']) {
            const batch = [];
            for(let j = 0; j<  validator['-c'] && index + j< validator['-n']; j++){
                batch.push(makeRequest(validator['-u']));
            }
            promises.push(Promise.allSettled(batch));
        }
      

        const results = await Promise.all(promises);

        results.forEach((batchResult) => {
            console.log(batchResult);
            batchResult.forEach((result) => {
                console.log(result.status);
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

main();