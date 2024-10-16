document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple signup functionality for demo purposes
    alert(`Thank you for signing up, ${name}!`);
    window.location.href = "login.html";
});
