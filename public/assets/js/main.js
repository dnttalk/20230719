$(function () {
    checkUser()
});

let checkUser = function () {
    if (typeof user != 'undefined') {
        console.log(1)
        if (user) {
            const d = new Date();
            // 一天
            // d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
            // 一小時
            d.setTime(d.getTime() + (1 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = "user=" + user + ";" + expires + ";path=/";
            const cookieValue = document.cookie;
            if (cookieValue.match('user=')) {
                // let username = cookieValue.replace('user=', '')
                let username = cookieValue.split('user=');
                if (username.length === 2) {
                    username = username[1]
                }

                $('#btn-login').text('User:' + username)
                $('#btn-login').prop('disabled', true)
            } else {
                location.href = '/login'
            }
        } else {
            const cookieValue = document.cookie;
            if (cookieValue.match('user=')) {
                let username = cookieValue.split('user=');
                if (username.length === 2) {
                    username = username[1]
                }
                $('#btn-login').text('User:' + username)
                $('#btn-login').prop('disabled', true)
            } else {
                location.href = '/login'
            }
        }
    } else {
        console.log(2)
        const cookieValue = document.cookie;
        if (cookieValue.match('user=')) {
            let username = cookieValue.split('user=');
            if (username.length === 2) {
                username = username[1]
            }
            $('#btn-login').text('User:' + username)
            $('#btn-login').prop('disabled', true)
        } else {
            location.href = '/login'
        }
    }
}