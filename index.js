const prompt = require('prompt-sync')({sigint: true});
const inputValidator = require('./validateInput');
const axios = require('axios');

 async function main() {
    let command  = ''
    
    do {
       command = prompt('%'); 
        const validator = inputValidator(command);
        const isValid = validator.valid;
        if(!isValid){
            console.log(`${command} is not recognized \n`)
        } else{
         let response = await axios.default.get(validator.arr[1]);
         console.log( 'Status Code:' + response.status);
         }
    } while (true);

}

main()