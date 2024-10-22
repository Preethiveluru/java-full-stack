export default class Employee{
    id;
    name;
    salary;
    constructor(){
        this.id=0;
        this.name='';
        this.salary=0;
    }


    setId(id){
        this.id=id;
    }
    setName(name){
        this.name=name;
    }
    setSalary(salary){
        this.salary=salary;
    }
}