// const newArr = [0,1,2,3,4,5]
// newArr.push(6)
// newArr.pop()
// newArr.shift()

// console.log(newArr.includes(3));
// console.log(newArr.indexOf(3));

// const myArr = newArr.join() // This changes to string 

// console.log(newArr);
// console.log(myArr);

// // Slice and Splice

//  const fruits = ["Banana", "Mango", "Orange", "Cherry"]

//  const slicedFruits = fruits.slice(1, 3)

//console.log(slicedFruits)
 

// const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// // 1. Delete elements
// const removedColors = colors.splice(1, 2); // Remove 2 elements starting from index 1
// console.log(removedColors); // Output: ['green', 'blue'] (the deleted elements)
// console.log(colors);        // Output: ['red', 'yellow', 'purple'] (original array modified)

// // 2. Insert elements
// colors.splice(1, 0, 'orange', 'pink'); // Insert 'orange' and 'pink' at index 1 (0 elements deleted)
// console.log(colors);                  // Output: ['red', 'orange', 'pink', 'yellow', 'purple']


// const marvel = ["Hulk", "Ironman", "Spiderman"]
// const dc = ["Superman", "Batman", "Flash"]

// const all_heroes = [...marvel, ...dc]


const anotherArr = [1,1,[3,[13]]]

const newArr = anotherArr.flat(Infinity)

console.log(newArr)
// console.log(all_heroes)