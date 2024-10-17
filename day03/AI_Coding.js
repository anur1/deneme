//write a for loop that starts from 1 and ends at 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-----------------------------")

//write an array of String and add 10 Student names (first and last) to it

let students = ["John Doe", "Jane Smith", "Michael Johnson", "Sarah Williams", "David Brown", "Emily Davis", "Michael Wilson", "Daniel Anderson", "David Taylor", "Joseph Thompson"];

//display all the student names on the console

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("-----------------------------")



//set the first student name to Muhtar and last student name to Kuzzat

students[0] = "Muhtar";
students[students.length - 1] = "Kuzzat";
console.log("-----------------------------")

//log the student names on console

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("-----------------------------")

//display all the elements of the students array in reversed order

for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
}

console.log("-----------------------------")

let email = "deneme@deneme.com"

//check if the email contains the domain "gmail.com"

if (email.includes("@gmail.com")) {
    console.log("Email includes gmail.com");
} else {
    console.log("Email does not include gmail.com");
}

//use string manipulation to retrieve the domain of the mail

let domain = email.substring(email.indexOf("@") + 1);
console.log("Domain of the email: " + domain);

console.log("-----------------------------")

//test retreivng domain with an  example email address

let exampleEmail = "test@example.com"
let exampleDomain = exampleEmail.substring(exampleEmail.indexOf("@") + 1);
console.log("Domain of the example email: " + exampleDomain);

console.log("-----------------------------")

let numbers = [100, 200, 300, 400, 5, 6, 7, 8, 9, 11, 10];

//write a program that can display the maximum and minimum numbers from the numbers array 

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(max)
console.log(min)
console.log("-----------------------------")


let nums = [5, 3, 8, 2, 1, 7, 4, 6, 0, 9]
//write a program that can sort the nums array in ascending order.

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
            let temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
        }
    }
}



console.log(`Sorted array in ascending order: ${nums}`)
console.log(`Sorted array in ascending order: ${nums}`)

console.log("----------------------")

//write an array that contains multiple duplicated elements

let duplicatedArray = [1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 7, 8, 9, 9, 9, 9, 9];

//write a program that can remove all the duplicated elements from the duplicatedArray array

let uniqueArray = [...new Set(duplicatedArray)];
console.log(`Unique array: ${uniqueArray}`);

console.log("----------------------")

/*
Write a class named Item with the following requirements:
    Attributes: itemName, price, quantity
    Methods: 
        constructor: initializing all the fields
        calculateTotalPrice: returns the total price of the item (price * quantity)
        toString: returns the string representation
        */
let Item = function (itemName, price, quantity) {
    this.itemName = itemName;
    this.price = price;
    this.quantity = quantity;
}

Item.prototype.calculateTotalPrice = function () {
    return this.price * this.quantity;
}

Item.prototype.toString = function () {
    return `Item: ${this.itemName}, Price: ${this.price}, Quantity: ${this.quantity}, Total Price: ${this.calculateTotalPrice()}`;
}


let item1 = new Item("Shirt", 15, 3);
console.log(item1.toString());

let item2 = new Item("Pants", 20, 2);
console.log(item2.toString());

console.log("----------------------")

//write a function that can reverse the given array and return the reversed array

let reverseArray = function (arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}









