console.log('This is Tutorial');

function greet(name, greetText = " You dont deserve this position") {
    // let name1="This";
    console.log(name + "!" + greetText);
    console.log(name + " Is One of my Bestfriends");
}
function sum(a,b,c){
let d= a+b+c;
return d;
// This line will never execute (Unreachable code)because we cannot print anything after Function return used///
// console.log("Function is returned")
}
let name = "Ziad";
let name1 = "Fabiha";
let name2 = "Meraj";
let name3 = "Bisma";
let greetText = "Congrats Youre Promoted to my Loved Ones";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
// let returnVal = greet(name3);
// console.log(returnVal)


let returnVal = sum(5,8,6);
console.log(returnVal)
// console.log(name + " is a good Boy")
// console.log(name1+ " is a good Girl")
// console.log(name2 + " is a good Boy")
// console.log(name3+ " is a good Girl")