class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        console.log(this.name + " is eating")

    }
}

class Student extends Person{
    constructor (name, age, gender, grade) {
        super(name, age, gender);
        this.grade = grade

    }

    study () {
        console.log(`${this.name} is studying in ${this.grade}`)
    }

}

class Teacher extends Person{

    teach() {
        console.log(`${this.name} is teaching`)
        }

}

let student1 = new Student("Hasan", 20, "Male", "High School");
let teacher1 = new Teacher("Veli", 20, "Male");

console.log(student1);
console.log(teacher1);

student1.eat()
student1.study();
teacher1.teach();

