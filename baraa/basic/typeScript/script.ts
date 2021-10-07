/* class Person {
    name:string;
    age:number;
    jobTitle:string;
    
    constructor(name:string,age:number,jobTitle:string){
        this.name=name;
        this.age=age;
        this.jobTitle=jobTitle;
        
    }
    print(){
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`
    }
} */



class Person {
    constructor(public name:string, public  age:number, public jobTitle:string) {
    }
    msg(){
        return`hello ${this.name} u r ${this.age} and u work as ${this.jobTitle}`
    }
 }

/*  let baraa = new Person("baraa",20);
 console.log(baraa.msg()) */

 class PersonPlus extends Person {
     salary:number;
     location:string;
    
     constructor(public name:string, public  age:number, public jobTitle:string, salary:number, location:string){
        super(name,age,jobTitle);
         this.salary=salary;
         this.location=location;
     }
     res(){
        return `${super.msg()} and u get ${this.salary} every month, and u work in ${this.location} `    }
    
 }

 let baraa = new PersonPlus("baraa",20,"developer",9000,"Wien");
 console.log(baraa.res());