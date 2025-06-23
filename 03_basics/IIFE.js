//An IIFE is a function in javascript that runs 
// immediately after it's defined

(function helloOne (){
    console.log("hello") // This is called named IIFE
}) ();   // Because we have given a name to function

((name) => {
  console.log(`Hello, ${name}`)
}) ("Amit")
// Normal IIFE without having anu name