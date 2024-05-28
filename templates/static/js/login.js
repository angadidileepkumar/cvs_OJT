const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication logic here
    // For example, check if the username and password match
    if (username === 'admin' && password === '123456') {
        // Successful login
        window.location.href = '/dashboard'; // Redirect to the dashboard page
    } else {
        // Invalid credentials
        errorMessage.textContent = 'Invalid username or password';
    }
});