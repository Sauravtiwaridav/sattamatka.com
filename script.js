
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var correctUsername = 'user';
    var correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
