const form = document.querySelector('form')
const password = document.querySelector('#pwd')
const confirmPassword = document.querySelector('#confirm_pwd')
const passwordError = document.querySelector('span.error')

form.addEventListener('submit', (e) => {
    errorClass = 'error'
    hideClass = 'hide'
    if (password.value !== confirmPassword.value) {
        e.preventDefault()
        password.classList.add(errorClass)
        confirmPassword.classList.add(errorClass)
        passwordError.classList.remove(hideClass)
    } else {
        password.classList.remove(errorClass)
        confirmPassword.classList.remove(errorClass)
        passwordError.classList.add(hideClass)
    }
})
