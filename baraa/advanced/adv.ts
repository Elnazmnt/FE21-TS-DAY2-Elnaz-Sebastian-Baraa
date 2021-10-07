const main =(document.getElementById("row")as HTMLElement);


class Vehicles {
  
    color:string;
    passengers:number;
    model:string;
    fuel :string;
    year:number;
    kilosLeft:number;
    image:string;
    constructor(color:string,passengers:number, model:string,fuel :string,year:number,kilos:number,image:string){
        
        this.color=color;
        this.passengers=passengers;
        this.model=model;
        this.fuel=fuel;
        this.year=year;
        this.kilosLeft=kilos;
        this.image=image;
    }

out(){
    return `<div class="card" style="width: 18rem;">
    <img src="${this.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.model}</h5>
      <p class="card-text">its ${this.color} and has ${this.passengers} seats and runs on ${this.fuel} </p>
      <a href="#" class="btn btn-primary">show me more</a>
    </div>
  </div>`
}
}

class bikes extends Vehicles{
    height:number;
    wheels:number;
    constructor(color:string,passengers:number, model:string,fuel :string,year:number,kilos:number,image:string, height:number, wheels:number){
        super(color,passengers,model,fuel,year,kilos,image)
        this.height=height;
        this.wheels=wheels;
    }
    out2(){
        return `${super.out()} its ${this.height}m high and has ${this.wheels}`
    }
}


class trucks extends Vehicles{
   maxWeight:number;
   placesToDrive:string;
    constructor(color:string,passengers:number, model:string,fuel :string,year:number,kilos:number,image:string, maxWeight:number,placesToDrive:string){
        super(color,passengers,model,fuel,year,kilos,image)
        this.maxWeight=maxWeight;
        this.placesToDrive=placesToDrive;
    }
    out2(){
        return `${super.out()} its ${this.maxWeight}kg high and is allowed to drive in ${this.placesToDrive}`
    }
}






let car1=new Vehicles("red",2,"nissan","diesel",2000,1100,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let car2=new Vehicles("red",7,"nissan","diesel",2000,56560,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let car3=new Vehicles("red",5,"nissan","diesel",2000,303,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let car4=new Vehicles("red",2,"nissan","electric",2000,39300,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let car5=new Vehicles("red",7,"nissan","benzin",2000,9830000,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");


let bike1 =new bikes("red",2,"nissan","diesel",2000,1100,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",4,2);
let bike2 =new bikes("red",7,"nissan","diesel",2000,56560,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",4,2);
let bike3 =new bikes("red",5,"nissan","diesel",2000,303,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",4,2);
let bike4 =new bikes("red",2,"nissan","electric",2000,39300,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",4,2);
let bike5 =new bikes("red",7,"nissan","benzin",2000,9830000,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",4,2);




let truck1=new trucks("red",2,"nissan","diesel",2000,1100,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2000,"Autobahn");
let truck2=new trucks("red",7,"nissan","diesel",2000,56560,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2000,"Autobahn");
let truck3=new trucks("red",5,"nissan","diesel",2000,303,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2000,"Autobahn");
let truck4=new trucks("red",2,"nissan","electric",2000,39300,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2000,"Autobahn");
let truck5=new trucks("red",7,"nissan","benzin",2000,9830000,"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",2000,"Autobahn");


let items :Array<Vehicles> =[car1,car2,car3,car4,car5,bike1,bike2,bike3,bike3,bike4,bike5,truck1,truck2,truck3,truck4,truck5];

for (let piece of items){

    main.innerHTML+= piece.out();

}