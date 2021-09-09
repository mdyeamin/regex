const submitBtn = () => {
    const inputFiled = document.getElementById('input-filed')
    const inputText = inputFiled.value;
    let regEx = /gmail/
    console.log(regEx.test(inputText));
    if (regEx.test(inputText) === true) {
        document.getElementById('valid').classList.add('d-block')
        document.getElementById('invalid').classList.remove('d-block')
    }
    else if (regEx.test(inputText) === false) {
        document.getElementById('invalid').classList.add('d-block')
        document.getElementById('valid').classList.remove('d-block')

    }
    inputFiled.value = '';
}