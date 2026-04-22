//-----------------This Keyword / Arrow functions--------------------------------

// const obj ={
//     username: "asad",
//     password: 1234,
//     welmsg: function(){
//         console.log(`${this} , Welcome to my website`);
        
//     }
// }

// console.log(obj);


// asad = function(){
//     let username = "asad"
//     console.log(`${this}, welcome to my website`);
    
// }

// asad()

// asad = () => {
//     console.log("asad here");
    
// }

// asad()

// let asad = function(num1, num2){
//     return(num1+num2)
    
// }

// console.log(asad(2,4));


// let asd = (num1,num2) => num1+num2
// console.log(asd(3,4));

// let asd = (num1,num2) => (num1+num2)
// console.log(asd(3,4));

// -----------------------Immediately invoked function Expression ( IIFE )---------------------------

// (function(){
//     console.log("asad");
    
// })();

// (() => {
//     console.log("asad2");
    
// })();

// ((name) => {
//     console.log(`${name}`);
// })("asad3")

//---------------------Loops-----------------------------

// for (let i = 0; i <= 10; i++) {
//     console.log(i);

// }

// for (let i = 1; i <= 10; i++) {

//     console.log();
    
//     for (let j = 1; j <= 10; j++) {
        
//         console.log(`${i} x ${j} = ${i*j}`);
        
        
//     }

// }


// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log("5 is detected");
//         break
//     }
//     console.log(i);
    
    
// }

// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log("5 is detected");
//         continue
//     }
//     console.log(i);
    
    
// }
//--------------------------------------while----------------------------------
// myarray = [1,2,3,4,5]

// let arr = 0

// while (arr < myarray.length) {
//     console.log(myarray[arr]);
//     arr++
// }

//--------------------------------------do while----------------------------------
// let a = 11
// do {
//     console.log(a);
//     a++
    
// } while (a<=10);

//-------------------------------------for of------------------------------------------
// const greeting = "hello world"
// for (const greet of greeting) {

//     console.log(`welcome to our ${greet}`);
    
// }


// const greeting = "hello world"
// for (const greet of greeting) {

//     if (greet <= 5) {
        
//         console.log("number is found");
//         break
//     }
//     console.log(greet);
    
// }

//---------------------------------------------MAPS-----------------------------------
// const map = new Map()

// map.set("PAK", "pakistan")
// map.set("BANG", "bangladesh")
// map.set("US", "Unites States")

// // console.log(map);


// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
    
// }


//---------------------------------------------------For in------------------------------------


// const myobj={
//     js : "javascript",
//     py: "python",
//     cpp: "c++"
// }


// for (const key in myobj) {

//     // console.log(key)
//     console.log(`${key} is for ${myobj[key]}`);
    
// }


// const car = ["corolla", "BMW", "FORD", "Tundra", "Revo"]

// // // car.forEach( function (names) {
// // //     console.log(names);
    
// // // })

// // car.forEach((names) => {
// //     console.log(names);
    
// // })

// car.forEach((val, index, arr) =>{
//     console.log(val, index, arr);
    
// })

//--------------------------------------------------FILTER---------------------------------
// const arr = [1,2,3,4,5,6,7,8,9,10]

// const nums = arr.filter((number) => number < 9 )

// console.log(nums);


// const books = [

//     {
//         name:"book1",
//         published: 1994,
//         sales: 5000
//     }
//     ,
//     {
//         name: "book2",
//         published: 1999,
//         sales: 1000
//     }
//     ,
//     {
//         name: "book3",
//         published: 2004,
//         sales: 5000
//     }
//     ,
//     {
//         name: "book4",
//         published: 2004,
//         sales: 1000
//     }
//     ,
//     {
//         name: "book5",
//         published: 2014,
//         sales: 5000
//     }
// ]


// const userbooks = books.filter((bk) => bk.sales === 5000)
// console.log(userbooks);


// const book = [1,2,3,4,5]

// const nbook = book.map((num) => { return num + 10})
// console.log(nbook);


// const books = [1,2,3,4,5]

// // const nbooks = book.map((num) => num + 10)
// // console.log(nbook);



// const nbook = books.forEach((num) => {
//     console.log(num + 10);
    
// })

// Filters are used to pass the conditions
// Maps are used to perform operations
// Foreach is a loop



//-------------------------------------------------REDUCE----------------------------------------------------------
// const num = [1,2,3]
// const nnum = num.reduce((acc,curval)=>{
//     console.log(`acc: ${acc} and curval:${curval}`);
//     return acc , curval
// },0)

// console.log(nnum);

// const num = [1,2,3]

// const nnum = num.reduce((acc, curval) => acc+curval , 0)
// console.log(nnum);

//---------------------------------------to add the values in object--------------------------------------------
// const myarr = [

// {
//     price: 1000
// }
// ,
// {
//     price: 2000
// }
// ,
// {
//     price: 3000
// }
// ,
// {
//     price: 4000
// }
// ]


// const total = myarr.reduce((acc, p) => acc + p.price ,0)
// console.log(total);
