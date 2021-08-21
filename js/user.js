
const users = require("./User.json");
const fs = require("fs");


  users.push({
    "id": 5,
    "name": "Sumant",
    "address": "kolkata",
    
    "bookedIds": []
})

console.log(users);
 fs.writeFile('Users.json',JSON.stringify(users),(err)=>{
     console.log(err)
 })


 //Try to code hotel reservation//
 console.log("WELCOME IN HOTEL RESERVATION");
 console.log("SELECT IN OPTION WHICH IS DESCRIBE");
console.log("Press=>1 Add the user","\nPress=>2 Remove the user");
var choice=1;
if(choice==2){
    console.log("Records are given of the users");
    console.log(users);
}
if(choice==1){
    console.log("Users's record have been removed");
    console.log(users.pop());

}