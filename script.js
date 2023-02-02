function checkPassword() {
    const pass1 = document.getElementById('password')
    const pass2 = document.getElementById('password-confirm')
    const errorPass = document.getElementById('error-pass')

    if (pass1.value != pass2.value) {
        pass1.setAttribute('class', 'error')
        pass2.setAttribute('class', 'error')
        errorPass.setAttribute('class', 'error-pass')
    } 
}

function checkPhone() {
    const tel = document.getElementById('phone-number')
    const errorTel = document.getElementById('error-tel')
    const input = tel.value
    const regex = "^[0-9]*$"

    if (!input.match(regex)) {
        errorTel.setAttribute('class', 'error-tel')
        tel.setAttribute('class', 'error')
    }
}

function clearErrors() {
    const errorList = document.querySelectorAll('.error')
    const errorTel = document.querySelector('#error-tel')
    const errorPass = document.querySelector('#error-pass')

    errorTel.classList.remove('error-tel')
    errorPass.classList.remove('error-pass')
    errorList.forEach(e => {e.classList.remove('error')})
}

function submitForm() {
    clearErrors()
    checkPassword()
    checkPhone()

    const form = document.querySelector('form')
    let errorList = document.getElementsByClassName('error')

    if (errorList.length <= 0) {
        form.submit()
    }
}


const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click', submitForm)
