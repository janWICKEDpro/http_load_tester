const prompt = require('prompt-sync')({sigint: true});
const inputValidator = require('./validateInput');
const axios = require('axios');

 async function main() {
    let command  = ''
    
    do {
       command = prompt('%'); 
       try{
         const validator = inputValidator(command);
         for (let i = 0; i < validator['-n']; i++) {
           
         }
         let response = await axios.default.get(validator.arr[1]);
         console.log( 'Status Code:' + response.status);
         console.log(response.data);
        
       } catch(e){
            console.log(e);
      
        }
      
    } while (true);
}

main()