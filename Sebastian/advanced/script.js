"use strict";
class Vehicle {
    constructor(brand, model, kilometers, seats, fuel, year) {
        this.brand = brand;
        this.model = model;
        this.kilometers = kilometers;
        this.seats = seats;
        this.fuel = fuel;
        this.year = year;
    }
    printVehicle() {
        return `
        
        <div class="card col-4 m-4" style="width: 18rem;">
     <img src="..." class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${this.brand}</h5>
    <p class="card-text">Model: ${this.model}</p>
    <p class="card-text">Kilometer: ${this.kilometers}</p>
    <p class="card-text">Seats: ${this.seats}</p>
    <p class="card-text">Fuel: ${this.fuel}</p>
    <p class="card-text">Fuel: ${this.year}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
    }
}
class Bikes extends Vehicle {
    constructor(brand, model, kilometers, seats, fuel, year, wheels) {
        super(brand, model, kilometers, seats, fuel, year);
        this.wheels = wheels;
    }
    printVehicle() {
        return ` 
        
        <div class="card col-4 m-4" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
       <h5 class="card-title">${this.brand}</h5>
       <p class="card-text">Model: ${this.model}</p>
       <p class="card-text">Kilometer: ${this.kilometers}</p>
       <p class="card-text">Seats: ${this.seats}</p>
       <p class="card-text">Fuel: ${this.fuel}</p>
       <p class="card-text">Fuel: ${this.year}</p>
       <p class="card-text">wheels: ${this.wheels}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>`;
    }
}
class Trucks extends Bikes {
    constructor(brand, model, kilometers, seats, fuel, year, wheels, trailers) {
        super(brand, model, kilometers, seats, fuel, year, wheels);
        this.trailers = trailers;
    }
    printVehicle() {
        return `
            
        <div class="card " style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
       <h5 class="card-title">${this.brand}</h5>
       <p class="card-text">Model: ${this.model}</p>
       <p class="card-text">Kilometer: ${this.kilometers}</p>
       <p class="card-text">Seats: ${this.seats}</p>
       <p class="card-text">Fuel: ${this.fuel}</p>
       <p class="card-text">Fuel: ${this.year}</p>
       <p class="card-text">Wheels: ${this.wheels}</p>
       <p class="card-text">Trailers: ${this.trailers}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>`;
    }
}
let car1 = new Vehicle("Audi", "A-X", 200.000, 5, "Petrol", 2012);
let car2 = new Vehicle("Trabant", "Grün", 100.00000, 4, "Petrol", 1966);
let car3 = new Vehicle("Stronach-Mobil", "1.0", 2, 1, "Petrol", 2021);
let car4 = new Vehicle("Mercedes", "C-Klasee", 100.000, 5, "Petrol", 2018);
let bike1 = new Bikes("KTM", "ABC", 100, 1, "Super", 2015, 2);
let truck1 = new Trucks("Man", "xyz", 10000000, 3, "Petrol", 2012, 16, 2);
let vehicles = [car1, car2, car3, car4, bike1, truck1];
for (let val of vehicles) {
    document.getElementById("text").innerHTML += val.printVehicle();
}
