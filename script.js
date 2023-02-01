function submitForm() {
    const form = document.querySelector('form')
    const pass1 = document.getElementById('password')
    const pass2 = document.getElementById('password-confirm')
    const label1 = document.getElementById('error-label')

    if (pass1.value == '' || pass2.value == '') {
        label1.setAttribute('class', 'error-empty')
    } else if (pass1.value == pass2.value) {
            form.submit()
    } else {
        pass1.setAttribute('class', 'error')
        pass2.setAttribute('class', 'error')
        label1.setAttribute('class', 'error')
    }
}


const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click', submitForm)