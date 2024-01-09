const http = require('https');

function makeRequest(url){

    return new Promise((resolve, reject)=>{
        http.get(url, response =>{
            const { statusCode } = response;

            let error;
            if (statusCode < 200 || statusCode >= 300) {
              error = new Error(`Request failed with status code: ${statusCode}`);
            }
            if (error) {
              reject(error);
              response.resume();
              return;
            }
            response.setEncoding('utf8');
            let rawData = '';
            response.on('data', (chunk) => {
              rawData += chunk;
            });
            response.on('end', () => {
              resolve();
            });
          }).on('error', (error) => {
            reject(error);
          });
        
    });
}

module.exports = makeRequest;