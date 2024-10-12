elements = ["Ali", 49]
console.log("elements")

students = ["Ali", "Veli"]

students.push("Muhtar")
console.log(students)

console.log(students[0])

students[students.length - 2] = "Mehmet"

console.log(students)

for (let each of students)
{console.log(each)}

for(let s of "CYDEO")
    console.log(s)

students.push("Veli")
students.unshift("Ali")
console.log(students)

students.splice(1, 2)
console.log(students)

students.shift ()

console.log(students)

students.pop()

console.log(students)
