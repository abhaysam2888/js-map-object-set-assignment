// question 1
const car = {
    make: "Ford",
    model: "Ford figo",
    year: 2015
}

for (const a in car) {
    console.log(`${a}: ${car[a]}`);
}


// question 2
const student = {
    name: "Abhay kumar",
    age: 18,
    grade: "A"
}

function updateInform(grade) {
    return student.grade = `${grade}`
}

const updatedInform = updateInform("B")
console.log(updatedInform);
console.log(student);


// question 3
function wordCounter(count) {
    if (typeof count === "object") {
        return Object.keys(count).length;
    } else {
        return 0;
    }
}

const inputObject = {
    name: "Sam",
    class: 12,
    rollNo: 515
}

const lengthCounter = wordCounter(inputObject)
console.log(`${lengthCounter}`);


// question 4
const obj1 = {
    name: "abhay",
    email: "abhay@gmail.com",
    phNo: 123456789,
    isLoggedIn: true
}

function checkedValue(value) {
    if (typeof obj1 === "object") {
        const values = Object.hasOwn(obj1, value)
        return console.log(` ${values}`);
    }
}
 const returnValue = checkedValue("name")
 console.log(returnValue);


//  question 5
const Cirlcleradius = 5

function areaCalulator(area) {
    if (typeof Cirlcleradius === "number") {
        return Math.PI * Math.pow(area, 2)
    } else {
        return "please input valid value"
    }
}

const areaOfCircle = areaCalulator(Cirlcleradius)
console.log(areaOfCircle);


// question 6
function reverseString(string) {
    const reversedString = string
    if (typeof reversedString === "string") {
        return reversedString.split("").reverse().join("")
        
    } else {
        return "please enter valid value"
    }
}

const str = "Hello i am Abhay"

const reversedString = reverseString(str)
console.log(reversedString);


// question 7


function updateMap(update) {
   
    if (update) {
         // add value
        const utlMap = new Map(Object.entries(update)) 
        console.log(utlMap);
        // delete value
        utlMap.delete(obj7)
        console.log(utlMap);
    }
}


// add any object 
const obj2 = {name: "abhay"}
const obj3 = {age: 18}
const obj4 = {email: "abhay@gmail.com"}

// update any object
const obj5 = {email: "sam@gmail.com"}

// delete any value
const obj7 = "name"

const combine = {...obj2,...obj3,...obj4,...obj5}

updateMap(combine)
// node script.js