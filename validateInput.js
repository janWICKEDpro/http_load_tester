
/*  */
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
    return {
        valid: true,
        arr: inputArr
    };
}



module.exports = validateInput;