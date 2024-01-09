
/*  */
const options =  new Map([
    ['-u','specify the url']
    ['-n','number of request']
])

function validateInput(input){
    let options = {
        'u': null,
        'n': 10
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
    for(var optionInput in optionInput){
        if(!options.has(optionInput)){
            throw new Error(`${optionInput}  is not a recognized option`);
        }
    }
    
    
    return {
        valid: true,
        arr: inputArr
    };
}



module.exports = validateInput;