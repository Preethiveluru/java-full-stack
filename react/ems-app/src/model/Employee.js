import Department from "./Department";

export default class Employee{
    empId;
    empName;
    empSalary;
    deptId;
    dep = Department
    constructor(){
        this.empId=0;
        this.empName='';
        this.empSalary=0;
        
       this.dep = new Department();
    }


    setId(empId){
        this.empId=empId;
    }
    setName(empName){
        this.empName=empName;
    }
    setSalary(empSalary){
        this.empSalary=empSalary;
    }
    setDeptId(deptId) {
        this.dep.deptId = deptId;
    }
}