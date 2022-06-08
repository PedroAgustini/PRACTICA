"use strict"

    // 1. Generar el codigo Html que voy a poenr en la pagina
    // 2. Identificar el contenedor donde pondré mi código
    // 3. Poner mi código
function generateCardCars(carsArray) {
    let html = '';
    for(let i = 0; i < carsArray.length; i++) {
        html += `<div class="col-4">
                        <div class="card">
                            <div class="card-body">
                            <p>Brand: ${carsArray[i].brand}</p>
                            <p>Year: ${carsArray[i].year}</p>
                            <p>model: ${carsArray[i].model}<p>
                            </div>
                        </div>
                    </div>`;
    }
    const container = document.getElementById('cars-container');
    container.innerHTML = html;
}


let cars = [
    { brand: 'Audi', model: 'A1', code: 'A1-MX', year: '2015'},
    { brand: 'Mazda', model: 'CX', code: 'CX-USA', year: '2016'},
    { brand: 'Nissan', model: 'Tsuru', code: 'Tsuru-ES', year: '2005'},
    { brand: 'Jeep', model: 'Compass', code: 'Compass-MX', year: '2020'}
]


function filterByYear(cars) {
    let filteredCars = [];
    for(let i = 0; i < cars.length; i++) {
       if(cars[i].year >= 2014 && cars[i].year <= 2018) {
           filteredCars.push(cars[i]);
       }
    }
    return filteredCars;
}


let cardsByYear = filterByYear(cars);
console.log(cardsByYear);
generateCardCars(cardsByYear);






