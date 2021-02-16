/*

 Create an arrow function that takes username,password 
    as input values and checks whether the username is sai
    and password is sai, based on the logic, return the 
    result  i.e, boolean value.

*/
function f1(){
    return "hello world";
}

console.log(f1());

var x=() => "hello world";

console.log(x());

function square(input){
    return input * input
}

console.log(square(10));

var sqr= input => input * input;

console.log(sqr(10));

var validate= (username,password) => username == "Sai" && password == "Sai";

console.log(validate("Sai123","Sai"));

const a=100;

console.log(a);

a=200;

console.log(a);


const emp={
    name:"ravi",
    address: "hyderabad"
}

emp.name="kiran";

emp={};

console.log(emp.name);

