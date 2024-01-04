
/*  */
const options =  new Map([
    ['-u','specify the url']
    ['-n','number of request']
])

function validateInput(input){
    let inputArr = input.split(' ');
    if(inputArr.length <=1){
        return {
            valid: false,
            arr: inputArr
        };
    }
    if(inputArr[0] != 'ccload'){
        return {
            valid: false,
            arr: inputArr
        };
    }
    let optionInputs = inputArr.filter((input, index)=>{
        return input[0] == '-';
    });
    for(var optionInput in optionInput){
        if(!options.has(optionInput)){
            console.log(`${optionInput}  is not recognized`)
        }
    }
    return {
        valid: true,
        arr: inputArr
    };
}



module.exports = validateInput;