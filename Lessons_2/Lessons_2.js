//task1
var myGLobal = 10;


function fun1() {
    oopsGlobal = 5;
}

fun1();

function fun2() {
    var output = "";
    if (typeof myGLobal != "undefined") {
        output = "myGlobal: " + myGLobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}

fun2();

//task 2
function myLocalScope() {
    'use strict'
    var myVar;
    console.log('inside myLocalScope', myVar);
}

myLocalScope();
console.log('outside myLocalScope', myVar);


