document.addEventListener('DOMContentLoaded', function() {
    // Fetch cars and populate them on the page
    fetch('http://localhost:3000/api/cars')
        .then(response => response.json())
        .then(cars => {
            const container = document.getElementById('car-container');
            const template = document.getElementById('car-template');

            cars.forEach(car => {
                const carClone = template.cloneNode(true);
                carClone.style.display = '';
                carClone.querySelector('.car-make-model').textContent = `${car.make} ${car.model}`;
                carClone.querySelector('.car-year').textContent = `Year: ${car.year}`;
                container.appendChild(carClone);
            });
        })
        .catch(error => console.error('Error', error));

    // Logout button event listener
    document.getElementById('logout-button').addEventListener('click', function() {
        fetch('http://localhost:3000/api/users/logout', {
            method: 'POST',
            credentials: 'include'
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '../login/login.html';
            } else {
                console.error('Logout failed');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
