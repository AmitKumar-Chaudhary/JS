//Objects 
// Objects are the collection of key value pairs.
// Objects are non primitive type.


const id = Symbol('id');
//symbol = Symbol is a  unique and immutable primitive value, primarily used as
//object property keys to prevent naming collisions.

//It guaranteed uniqueness, even if their descriptions are identical.


const detail = {
    name: "Amit Kumar Chaudhary",
    [id]: 1,
    age: 24,
    address: "Kohalpur"
}
//object.freeze(detail) by using this line you cannot change 
// object properties 
console.log(detail[id])