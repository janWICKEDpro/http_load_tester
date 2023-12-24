const prompt = require('prompt-sync')({sigint: true});
const inputValidator = require('./validateInput');
const https = require('https');
 async function main() {
    let command  = ''
      
   
    do {
       command = prompt('%'); 
       const  res = inputValidator(command).valid;
        if(!res){
            console.log(`${command} is not recognized \n`)
        } else{
            console.log('at ')
         let dat1a =   https.get('https://www.google.com', res =>{

        console.log(res.data);
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });
  
        res.on('end', () => {
          // Process the response data here
          console.log(data);
        });
        req.on('error', (error) => {
            console.error('Error fetching data:', error);
          });
            dat1a.end();
      });
  
     
         }
    } while (1);
    


}

main()