// const name = "Amit"  // global scopes are outside of block
// const age = 24   

// if(true){                  
//     const name = "Sumit" // Block scopes are inside the curly braces or inside a block
//     const age = 20   
// }

/************ Interesting *******************/


addOne(5) // here we can access addOne before initialization
function addOne(num){
  return num + 1
}


addTwo(5) // Cannot access 'addTwo' before initialization
const addTwo = function addTwo(num){ // because we have created a function using variable or
  return num + 1                     // we can say an expression
}



