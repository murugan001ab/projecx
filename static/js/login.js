function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var mobile = document.getElementById('password').value;
    var email = document.getElementById('password').value;

    var errorMessage = document.getElementById('error-message');

    // Basic validation, you can add more complex validation as needed
    if (username === '' || password === '') {
        errorMessage.textContent = 'Username and password are required.';
    } else {
        // Perform login logic here (e.g., send data to server)
        errorMessage.textContent = ''; // Clear any previous error messages
        // You can redirect the user or perform other actions upon successful login
        alert('Login successful!');
    }
}