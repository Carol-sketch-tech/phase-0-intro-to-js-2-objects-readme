// javascript's Object Methods

// objects.keys()- it used to get the top level keys in as object.(not the ones that are nested.)
// it is written by calling hte object.keys()and passing hte object name as the argument.
 const wednesdayMenu ={
    cheesePlate:{
        soft:"brie",
        semiSoft:"fontina",
        hard:"provolone",
    },
    fires:"sweet potatoes",
    salad:"southwester",

 }
 console.log(Object.keys(wednesdayMenu))
//  it does not pick the keys in the nested object.

// 2 Object.values()
// this returns an array containing objects values rather than keys.
console.log(Object.values(wednesdayMenu))