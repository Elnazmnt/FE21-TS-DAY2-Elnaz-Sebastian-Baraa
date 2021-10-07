//Exercise 1

class Person {
    name: string;
    age:number;
    jobTitle: string;

    constructor( name:string,  age:number, jobTitle: string){ 
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    printCard(){
        return `<div> Hello my name is ${this.name} and I am ${this.age} years old, and Iam a ${this.jobTitle}. </div>`;
    }
}

/* let person1 = new person ("John", 22, "programmer");

(document.getElementById("text")as HTMLElement).innerHTML += person1.printCard();  */

/* class person {
    constructor( public name:string, public  age:number, public jobTitle: string){ }

    printCard(){
        return `<div> Hello my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}. </div>`;
    }
}
 */

class JobDescription extends Person{
    salary: number;
    location: string;

constructor(name, age, jobTitle, salary: number,  location: string){
        super(name, age jobTitle );
        this.salary = salary;
        this.location = location;
}
        printFull(){
        return `${super.printCard()} I'm payed ${this.salary} and the job is located in ${this.location}. </div>`;
    }
}


let person1 = new JobDescription ("John", 22, "programmer", 1200, "Vienna");

(document.getElementById("text")as HTMLElement).innerHTML += person1.printFull();

