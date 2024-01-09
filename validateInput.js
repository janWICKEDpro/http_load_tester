
/*  */
const options =  new Map([
    ['-u','specify the url'],
    ['-n','number of request']
])

function validateInput(input){
    let optionObj = {
        '-u': '',
        '-n': 10
    };
    let inputArr = input.split(' ');
    if(inputArr.length <=1){
        throw new Error('Invalid command');
    }
    if(inputArr[0] != 'ccload'){
        throw new Error(`Invalid: ${inputArr[0]} is not recognized`);
    }
    let optionInputs = inputArr.filter((input, index)=>{
        return input[0] == '-';
    });
 
   for (let i = 0; i < optionInputs.length; i++) {
        if(!options.has(optionInputs[i])){
            throw new Error(`${optionInputs[i]}  is not a recognized option`);
        }
    }
    for (let i = 0; i < inputArr.length; i++) {
        if(options.has(inputArr[i])){
            optionObj[inputArr[i]] = inputArr[i+1];
        }
    }
    if(!optionObj['-u']) throw new Error('Invalid input: -u missing');

    optionObj['-n'] = parseInt(optionObj['-n'], 10);
    
    return optionObj;
}


module.exports = validateInput;