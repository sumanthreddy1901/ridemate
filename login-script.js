document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple login functionality for demo purposes
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "test@ridemate.com" && password === "password123") {

        localStorage.setItem('loggedIn', 'true');

        alert('Login successful!');
        window.location.href = "rides.html";
    } else {
        alert('Invalid email or password.');
    }
});
