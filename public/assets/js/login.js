var user = document.querySelector("#user")
var pwd = document.querySelector('#pwd')
var login = document.querySelector('#login')
var form = document.querySelector('#loginForm')
login.onclick = function (e) {
    if (user.value === '' || pwd.value === '') {
        e.preventDefault()
        alert("Username and password are required......")
    } else {
        form.action = '/api/user/login'
        form.submit()
    }
}

if (typeof $.cookie('user') == 'undefined') {
} else {
    location.href = '/'
}