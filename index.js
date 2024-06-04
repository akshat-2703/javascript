/* let num = prompt("enter a value") ;
if(num >= 90 && num <= 100)
{
    console.log("GRADE = A") ;
}
else if(num >= 80 && num <= 89){
    console.log("GRADE B") ;
}
else if(num >= 70 && num <= 79){
    console.log("GRADE C")
}
*/
/*
let sum = 0 ;
for(int i = 1;i <= 7 ;i++){
    sum = sum + i ;
}
console.log("sum = ",sum) ;
console.log("loop has ended") ;
*/
//for strings and for array we use for of loop for object we dont use this loop
/*   let str = "JAVASCRIPT" ;
for(let i of str){
    console.log("i= ",i) ;
}
//for object we use for in loop 
let student = {
    name : "Rahul Kumar",
    age : "42",
    cgpa : 7.5 ,
    isPass : true 
};
for(let i in student){  
  console.log(i) ; //this returns key basically 
}
for(let key in student){
    console.log("key = ",key,"value",student[key]) ;
}
let gameNum = 25 ;
let userNum = prompt("Guess the game number") ;
while(userNum != gameNum){
    userNum = prompt("You entered wrong number.Guess again") ;
}
console.log("congratulations u enter the right number") ;

let str = "Apna college" ;
console.log(str[9]) 
let obj = {
    item : "pen",
    price : 10
 } ;
let otput  = `the cost of ${obj.item} is ${obj.price} rupees` ;

//esape character we count as single character 
let str = "ApnaCollege" ;
// str.toUpperCase() alwys returns new value ;
let newStr = str.toLowerCase() ;
console.log(newStr) ;
//Strings are immutable as it means koi bhi change ayga to wo hmko ny wale m krna hoga purane m koi change ni aayga

let str = "APNACOLLEGE" ;
console.log(str.slice(1,6)) ;
//ending wala part include ni hoga 
//if kuch ni dege to pura string 1 se de dega 
let str2= "FS" ;
let res = str.concat(str2) ;

let str = "hello" ;
console.log(str.replace("lo","p"))
//replace s sirf ek baar and replaceall sari jgh change hoga 

let str = "ILoveJS" ;
str = str.replace("I","S") ;
console.log(str.charAt(3)) ;

let str = prompt("Generate Username") ;
let use = "@" + str + str.length ;
console.log(use) ;

let arr = [23,1,13,54,32] ;
console.log(arr) ;
//properties koi value deti aur methods kuch kaam krti h 

let arr = ["aks","at","adv"] 
//for of
for(let hero of arr){
    console.log(hero) ;
}
let marks = [75,32,12,44] ;
let sum = 0 ;
for(let val of marks){
    sum += val ;
}
let avg = sum/marks.length ;
console.log(avg) ;

let items = [250,645,232,212,500] ;
let i = 0 ;
for(let val of items){
    console.log(`value at index ${i} = ${val}`) ;
    let offer = val/10 ;
    items[i] = items[i] -offer ;
    console.log(`value after offer = ${val}`)  ;
    i++ ;
}

let food = ["tomato","vek"]
console.log(food) ;
food.push("chipd") 
console.log(food) ;//at end ;
food.pop() //at end ;
//to convert into string we use as
console.log(food.toString()) ; 
//original array not change 
//concat joins original array and returns result or new array returns 
unsift was use addto start at array 
shift was used to delete element at starting 
//slice same as string returns a piece of string 
//splice change original array(add,remove,replace)
splice(startIdx,delCount,newEl1...)
startidx s change,kitne element delete krna ,kya kuch ny element add krne h jis index p delete kre 
let arr = [1,2,3,4,5,6,7] ;
arr.splice(2,2,101,102) ;
console.log(arr) ;
//add element without deleting
//arr.splice(2,0,101) ;
console.log(arr) ;
//delete element 
arr.splice(3,1) ;
//Replace element
arr.splice(3,1,101) ;
sirf ek index paas kiya splice m to wo us index k aage k sare element delete kr dega
aur agr koi bhi index nhi paas kiya to koi element delete nhi hoga 

let arr = ["BLOOMBERG","MICROSOFT","UBER","GOOGLE","IBM","NETFLIX"] ;
console.log(arr.shift()) ;
console.log(arr) ;
arr.splice(1,1,"OLA")
console.log(arr) ;
arr.splice(6,0,'AMAZON') ;
console.log(arr) ;
console.log(food) ;
function myFunction(msg){
    console.log(msg) ;
}
myFunction('I LOVE JS');

function sum(x,y){
    //local variable->scope
    s = x+y ;
    return s ;
}
let val = sum(3,4) ;
console.log(val) ;

//ARROW FUNCTIONS 
//COMPACT WAY OF WRITING THE FUNCTIONS 
//sum function
function sum(a,b){
    return a+b ;
}
//multiply function MODERN JAVASCRIPT INTRODUCES 
function mul(a,b){
    return a*b ;
}
const arrow = (a,b) => {
    console.log(a+b) ;
};

const mult = (a,b) => {
    console.log(a*b) ;
};

// in JS functions can passed as parameter and number too
//A callback is a function passes as an argument to another function
function abc(){
    console.log("hello") ;
}
function myFunc(abc){
    return abc ;
}
//callback function : here it is a function to execute for each element in the array 
let arr = ["pune","delhi"] ;
arr.forEach((val) => {
    console.log(val.toUpperCase()) ;
})
 
// 3 parameters basically value(item) ,idx(pos) , arr 
arr.forEach((val,idx,arr) => {
    console.log(val.toUpperCase(),idx,arr) ;
})
//only used for array not for strings 
//HIGHER ORDER FUNCTION/METHODS(HOF/HOM)
//FOR EACH CAN BE SAY HOF/HOM 
//HOF - DUSRE FUNCTION KO YHA TO PARAMETER LE LETE H YA FR KISI FUNCTION KO RETURN KRTE H
//JHA BHI CALLBACK FUNCTION USE HO RHA HO TO WO HIGHER ORDER FUNCTION/HIGHER ORDR METHOD BN JAYGA 
arr.forEach(call back function) ;

let arr = [2,4,3,5] ;
arr.forEach((val) => {
     console.log(val*val)
})
