var str="asqwed7";

var pattern=/[a-z]+[0-9]+/;

console.log(pattern.test(str));

var str="a ";

var pattern=/\s/;

console.log(pattern.test(str));

var str="ravi@gmail.com";

var pattern=/[.]com/;

console.log(pattern.test(str));

var str="a";

var pattern=/\w/;

console.log(pattern.test(str));

var str="a!";

var pattern=/\W/;

console.log(pattern.test(str));

var str="aaaaaa7";

var pattern=/[a-z]+[0-9]+/;

console.log(pattern.test(str));

//+,*,?,{X}, {X,Y},{X,}, ^,$,?=,?!//

var str="MDP98654AYP";

var pattern=/MDP[0-9]+AYP/;

console.log(pattern.test(str));

