//1) Create an object with four different properties, with values of your own choice (ex: name, birthday, hobby, email).
const dog = {
    name: "fiddo",
    age: 99,
    race: "samoyed",
    email: "doggy@mail.dk"
}


/*Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object.
for(prop in myObj){
console.log(prop,myObj[prop])}*/

for(prop in dog){
    console.log(prop,dog[prop])
}

/*Use the delete keyword to demonstrate we can delete existing properties 
from an object (delete a property, and iterate over the properties again)*/
delete dog.email
for(prop in dog){
    console.log(prop,dog[prop])
}

//Add a new property to your object to demonstrate that we can add new properties to existing objects*/
dog.color="red"
for(prop in dog){
    console.log(prop,dog[prop])
}