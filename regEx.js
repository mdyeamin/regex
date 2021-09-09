const submitBtn = () => {
    const inputFiled = document.getElementById('input-filed')
    const inputText = inputFiled.value;
    let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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