class Employee {
    constructor(name = "Unknown", age=18, salary=30_000, jobTitle="Unknown") {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    work (){
        console.log(this.name + " is working")
    }

}

let employee1 = new Employee();
employee1.name = "James";
employee1.age = 50;
employee1.salary = 10000
employee1.jobTitle = "Prof"

console.log(employee1)

let employee2 = new Employee ("Ali", 10, 5000, "Prof")
console.log(employee2)

let employee3 = new Employee()
console.log(employee3)

employee1.work()