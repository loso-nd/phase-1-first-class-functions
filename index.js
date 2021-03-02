/**
 * assigned receivesAFunction() an identifier (callback)
 * We passed an anonymous function, function () { return "I have been called... }, 
 * as the lone argument to our invocation of receivesAFunction().
 * receivesAFunction() stored the passed-in function in the local (cb) variable and 
 * then invoked the callback function.
 * The invoked callback returned its long string, which was console.log()-ed out in receivesAFunction().
 */

function receivesAFunction (callback) {
    return callback();
}

receivesAFunction(function () { return `I have been called`});


function returnsANamedFunction() { 
    return function myFun() {
    }
}


function returnsAnAnonymousFunction() { 
    return function () {
    }
}


//returnsANamedFunction(function() { return `I have been called`});


//(function (name) {return 'Hello there, ' + name;} );
// function iInvokeThings (thing) {
//     return thing();
//   }
  
//   iInvokeThings(function () { return 4 + 5; });
//   // => 9
  
//   iInvokeThings(function () { return 'Hello, ' + 'world!'; });
//   // => "Hello, world!" 


// function greet (name, cb) {
//     return cb(name);
//   }
  
//   greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
//   // => "Hello there, Ada Lovelace"
  
//   function doMath (num1, num2, cb) {
//     return cb(num1, num2);
//   }
  
//   doMath(42, 8, function (num1, num2) { return num1 * num2; });
//   // => 336 