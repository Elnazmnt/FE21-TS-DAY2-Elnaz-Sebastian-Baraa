//Basic 1:
class Person {
    name : string;
    age: number;
    jobTitle: string;
    constructor( name : string , age : number , jobTitle : string ){
    this.name=name;
    this.age=age;
    this.jobTitle=jobTitle;}
 msg(){
     return `Hello there, My name is : ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}”`}
}

var barra=new Person("Barra" ,20, "programmer");
document.write("---------Basic 1:-----------<br>");
document.write(barra.msg());

//Basic 2:

class Employee extends Person{
    salary;
    jobLocation;
    constructor( name : string , age : number , jobTitle : string ,salary : number, jobLocation : string){
       super( name , age , jobTitle );
       this.salary=salary;
       this.jobLocation=jobLocation;
    }
       empInfos(){
        return `I ${super.msg()}am ${this.name}and I get ${this.salary} every month, and I work in ${this.jobLocation}`}
    }
var emo=new Employee("Barra" ,20, "programmer", 5000, "Vienna");
document.write("<br>---------Basic 2:-----------<br>");
document.write(emo.empInfos());