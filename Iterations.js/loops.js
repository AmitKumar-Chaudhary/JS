//  const arr = ["Amit", "Sumit", "Samir"]
//   for (const index of arr) {
//       console.log(index);
    
//   }
// for of loop
//   const greeting = "Hello"
//   for (const index of greeting) {
//       console.log(index);
    
//   }

// for in loop

// const newObject = {
//     name: "Amit",
//     age: 24,
//     address: "Kohalpur"
// }

// for (const key in newObject) {
//      console.log(`${key}: ${newObject[key]}`);
     
// }

// for each loop

// const students = ["Amit Kumar Chaudhary", "Sumit Kumar Chaudhary", "Samir Jung Shah"]

// students.forEach( (items) => {
//     console.log(items);
    
// } )

// const students = [
//     {
//         name: "Amit Kumar Chaudhary",
//         age: 24
//     },
//     {
//         name: "Ranjit Chaudhary",
//         age: 22
//     }
// ]

// students.forEach( (items) => {
//     console.log(`${items.name} : ${items.age}`);
    
// })

const myNums = [1,2,3,4,5,6,7,8]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// console.log(newNums);
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);
