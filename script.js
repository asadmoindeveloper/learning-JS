/*
used to print

console.log("here is my first javascript code")

*/

/*
variables and constants

const stdId = 12345
let Name = "Asad"

console.log(stdId);
console.log(Name);

*/

/*

Data types of Java script

number
bigint
string
boolean 
null
undefined
symbol


console.log(typeof "asad");
*/

/*
Conversions
String to number:

let score = "33abc"
let convertscore = Number(score)
console.log(convertscore);
console.log(typeof convertscore);

from number to boolean:

let answer = 1
let convertanswer = Boolean(answer)
console.log(convertanswer);

*/

// premitive data types : boolean, number, string, symbol, null, undefined, BigInt

// non premitive or reference data type: Array, Objects, Functions

// This is how Array defined: let cars = [BMW, Mercedes, Audio, MarkX]

/*
this is how we make functions

let carfunctions = function(){
    console.log("hello world");
    
}

*/


/*
this is how objects are made

let obj = {
    Carname: MarkX,
    Engine: v8
}
*/

/*
let name = "        asad    "
console.log(name.trim());

there are two more methods that are trimstart and trimend
*/

// there are many different functions for the string data type you can explore on mdn (.lowercase, .uppercase, .indexof, .length)

// these are some of the lectures I am learning through someone of javascript


/* 
const id = 19430
let name = "      asad moin             "
let age = 22
let course = 32


console.log(`the student id is ${id} and the name of the student is ${name.trim()} and his age is ${age} his pending courses are ${course}`)
*/

//arrays in JS

//const my1arr = ['Aisha', 'asad', 3, 4, true, 6]     ( normal array initialization)

//console.log(my1arr[0]);             (prints the number in array at position 0)


//const asad = new Array(1,2,3,4,5,6,'asad')  object of array
//console.log(asad[6]);


//Array methods 

//asad.push(10)                            (add the number 10 in the array)
//console.log(asad);

//asad.pop()                                (delete the last number of array)
//console.log(asad)


//console.log(asad.includes(2));                   (determine that 2nd position in the array is available or not)
//console.log(asad.indexOf(2));                    (determines that what is the number is at that positon)

/*
const newarray = asad.join()                          ( convert the whole array into string)
console.log(typeof newarray);                         ( give the type of the array)
*/


// slice or splice

//console.log('a', asad.slice(1,3));                  ( only gives the number in the defined position of array and didn't make any change in it)

//console.log('b', asad);

//console.log('c', asad.splice(0,3));                  

// (when use splice so after printing it removes the part that we called in splice and make change in the array)

//console.log(asad);


//const student = ["asad", "ali" , "kevin", "eric"]

//const Grade = ["Aone", "A grade" , "B grade", "C grade"] 

//const combine = student.concat(Grade) it combines two array 

//const combine = [...student, ...Grade] //same as concat() it also combine two array
//console.log(combine)

// const myarr = [1,2,3,4,[1,2,3,4,5],6,7,[8,9,0]]

// const mynewarr = myarr.flat(Infinity)

// console.log(mynewarr)

// console.log(Array.isArray("Asad"));

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3));

// OBJECTS

// const mysym = Symbol("h1")

const myobj = {
    Name: "asad",
    date: "12/10/2025",
    //[mysym]: "h1", // is used to call system into object
    gender: "male",
    Isloggedin: false,
    age: 18
}

// console.log(myobj[mysym]); //is used to print symbol
// console.log(myobj["date"])
// myobj.Name = "Bilal"
// console.log(myobj.Name);
// Object.freeze(myobj) // is used to freeze the object now we can't change anything in object


// Function

// myobj.greeting = function(){

//     console.log("hello this is function 1");
// }

// myobj.greeting2 = function(){
//     console.log(`this is our function two, ${this.Name} ${this.date}`)
// }

// console.log(myobj.greeting());
// console.log(myobj.greeting2());

// const obj1 = new Object() // this is a singleton object

//This is the literal object
// const myobj2 = {

//         email: "asad@gmail.com",
//         fullname: {
//             firstname: "asad",
//             lastname: {
//                 lastnamee: "moin"
//             }
//         }
// }

// console.log(myobj2.fullname.lastname.lastnamee)


 obj1 = {1:"a" , 2:"b" , 3:"c"}
 obj2 = {4:"d", 5:"e"}

// const obj3 = Object.assign({} , obj1,obj2)   method to combine two objects
// console.log(obj3)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// console.log(Object.keys(myobj))
// console.log(Object.values(myobj))