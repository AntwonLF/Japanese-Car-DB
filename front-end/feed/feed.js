
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/cars')
    .then(response => response.json())
    .then(cars => {
        const container = document.getElementById('car-container');
        const template = document.getElementById('car-template');

        cars.forEach(car => {
            const  carClone = template.cloneNode(true);
            carClone.style.display = '';
            carClone.querySelector('.car-make-model').textContent = `${car.make} ${car.model}`;
            carClone.querySelector('.car-year').textContent = `Year: ${car.year}`;
            container.appendChild(carClone);
        });
    })
    .catch(error => console.error('Error', error));
})