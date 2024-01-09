
/*  */
const options =  new Map([
    ['-u','specify the url']
    ['-n','number of request']
])

function validateInput(input){
    let optionObj = {
        '-u': null,
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
    for(var optionInput in optionInputs){
        if(!options.has(optionInput)){
            throw new Error(`${optionInput}  is not a recognized option`);
        }
    }
    for (let i = 0; i < inputArr.length; i++) {
        if(optionInput.has(inputArr[i])){
            optionObj[inputArr[i]] = inputArr[i+1];
        }
    }
    if(!optionObj['-u']) throw new Error('Invalid input: -u missing');

    optionObj['-n'] = parseInt(optionObj['-n'], 10);
    
    return optionObj;
}



module.exports = validateInput;