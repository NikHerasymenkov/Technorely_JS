
function myLocalScope() {
    'use strict'
    var myVar;
    console.log('inside myLocalScope', myVar);
}

myLocalScope();
console.log('outside myLocalScope', myVar);


