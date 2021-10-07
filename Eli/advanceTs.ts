class Vehicles {
    model: string;
    kilometers: number;
    seats: number;
    fuel: string;
    year: number;
    img: string;
    constructor(model: string, kilometers: number, seats: number, fuel: string, year: number, img: string) {
        this.model=model;
        this.kilometers=kilometers;
        this.seats=seats;
        this.fuel=fuel;
        this.year=year;
        this.img=img;
    }
    printCard(){
            return `<div class="col-4 m-4">
            <div class="card col-4 m-4" style="width: 18rem;">
            <img src=${this.img} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Model:${this.model}</h5>
              <p class="card-text">Kilometer:${this.kilometers}</p>
              <p class="card-text">Seats:  ${this.seats}</p>
              <p class="card-text">Fuel:  ${this.fuel}</p>
              <p class="card-text">Year:  ${this.year}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>`
        }
}

let auto1=new Vehicles("Benz", 1400,4,"benzene", 2021,"img/benz.jpeg");
let auto2=new Vehicles("Audi", 1300,2,"benzene", 2020,"img/audi.jpg");
let auto3=new Vehicles("Porsche", 1200,2,"benzene", 2018,"img/por.jpg");
let auto4=new Vehicles("BMW", 1000,4,"benzene", 2014,"img/bmw.jpg");

let myAuto : Array<Vehicles> =[auto1,auto2,auto3,auto4];
 //console.log(myAuto);

 for (let x of myAuto){
    (document.getElementById("cardExample")as HTMLElement).innerHTML += x.printCard();
}


// class Motorbikes extends Vehicles {
//     color: string;
//     constructor(model: string, kilometers: number, seats: number, fuel: string, year: number,color:string,img:string){
//         super(model,kilometers, seats, fuel, year,img)
//         this.color=color;}
//     motoInfos(){
//         return`this Moto is ${this.color}`

//     }

// }
// class Trucks extends Vehicles {
//     insurance: boolean;
//     constructor(model: string, kilometers: number, seats: number, fuel: string, year: number, insurance: boolean,img:string){
// super(model,kilometers, seats, fuel, year,img)
// this.insurance=insurance;}
// truckInfo(){
//     return` this Trucks has ${this.insurance} insurance`
// }
// }