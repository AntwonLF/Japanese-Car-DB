document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('login-error-msg');
    
        fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }), 
        })
        .then(response => {
            if (response.ok) {
                window.location.href ='../feed/feed.html';
            } else {
                response.json().then(data => {
                    errorMsg.textContent = data.message || 'Login Failed';
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errorMsg.textContent = 'An error occurred';
        });
    });
    

    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const errorMsg = document.getElementById('register-error-msg');
        
        fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '../feed/feed.html';
            } else {
                return response.json().then(data => {
                    errorMsg.textContent = data.message || 'Registration failed';
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errorMsg.textContent = 'An error occurred';
        });
    });
});
