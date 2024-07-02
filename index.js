// objects - are a collection of Data.they consist of list of properties bounded by curly braces.they properties can point to data of nay type.
// basic syntax for obejcts 
// const obj = {key:value};
// when we have to represent multiples properties we use commas to seperate them as follows 
//  const objs={
//     key1: value,
//     key2: value,
//     key3: value,
//     key4: value,
//  };

// we can also have nested objects in which values associated with one ot more of ithe keys is another object
// const objects={
//     key1:value,
//     key2:value,
//     key3: {
//         innerkey1:value,
//         innerkey2:value,
//         },
//     key4:value,
// }

// multiples properties can hae the same value
const meals ={
    breakfast:" chapati beans",
    lunch:"chapati beans ",
    dinner: "ugali",
}
console.log(meals.lunch);
// however they keynames must be unique.if the same key is reused multiple times
// only the final value will be used the rest will be overwritten.
// the key is what lets us acces the key

// acccess a value stored in on object.
// we acces an in an object by typing the object name.then accessing a a value under a key name 
// we type the key name.
// access of a key inside an object ca be using dot notation ot bracket notation.
// dot notation

console.log(meals.dinner);

const cities={
    kenya:{city1:"Nairobi",
           city2:"nakuru",
           city3:"eldoret",
    },
    USA:{
        city1:"newyork",
        city2:"LA",
        city3:"vegas",
    }
} 
console.log(cities.USA.city3);
// accessing a value using bracket notation.
console.log(cities["kenya"]["city1"])
// two places where it is necessary to use bracket notation.
// nonstandard keys- this is when a string is used an a keyname.example
const places={
    "that place in the city with wild animals": "kws",
    "that place in kajiado with animals":"maasai mara",
}
console.log(places["that place in the city with wild animals"])

// another palce to use bracket notation
const names={
    firstName:"caroline",
    secondName:"wanjiru",
    thirdName:"bancroft",
}

let identity= "secondName";

console.log(names[identity])

// bracket notation can also be used to create another object.
