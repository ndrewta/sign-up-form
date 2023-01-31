function submitForm() {
    const form = document.querySelector('form')
    const pass1 = document.getElementById('password')
    const pass2 = document.getElementById('password-confirm')

    if (pass1.value == pass2.value && (pass1.value || pass2.value) != '') {
        form.submit()
        console.log("Submitted")
    } else {
        pass1.setAttribute('class', 'error')
        pass2.setAttribute('class', 'error')
        console.log("Error")
    }
}


const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click', submitForm)