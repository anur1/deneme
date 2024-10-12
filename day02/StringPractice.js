let greeting = "Hello"
let name = "Wooden Spoon"
console.log(name.length)
console.log(typeof greeting)
console.log(name.charAt(2))
console.log(name[2])
console.log(name.length - 1)
console.log("------------------")

console.log(name)
name = name.toLowerCase()
console.log(name)


let word1 = "JS"
let word2 = "js"

console.log(word1 === word2)
console.log(word1.toLowerCase() === word2.toLowerCase())
console.log("------------------")

let x = "Python Python"
x = x.replace("Python", "JavaScript")
console.log(x)

x = "Python Python"
x = x.replace(/Python/g, "JavaScript");
console.log(x)

console.log("-----------------")

let str = "ABCDEFGH1234567KLMNQRSTadfafa123123123213ASDFASFD"
str = str.replace(/[0-9]/g, "");
console.log(str)

console.log("----------------")

let email = "cydeoschool@gmail.com"
let domain = email.substring(email.indexOf("@") + 1, email.indexOf("."));
console.log(email)
console.log(domain)

console.log("-------------------    ")

console.log (email.includes("hotmail"))
console.log(email.includes("gmail.com"))

console.log("(-----------)")

let studentName = "Hasan"
let studentAge = 30;
console.log ("Student name is" + studentName + "with age" + studentAge)
console.log(`name is ${studentName} age is ${studentAge}`)

let course = "Playwritht";
for (let index=0; index <course.length; index++) {
    console.log(course[index]) 
    
}