
export default class Employee {
    constructor() {
        this.empId = 0;
        this.empName = '';
        this.empSalary = 0;
    }

    setId(empId) {
        this.empId = empId; 
    }

    setName(empName) {
        this.empName = empName; 
    }

    setSalary(empSalary) {
        this.empSalary = empSalary; 
    }

   
}
