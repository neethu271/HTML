var str="AH1#aHHq";

var pattern=/(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W])[\w\W]{8,}/;

console.log(pattern.test(str));

var str="ravi@gmail.com";

var pattern=/[.]com/;

console.log(pattern.test(str));

var str="ravi@gmail1.com";

var pattern=/\d/;

console.log(pattern.test(str));

var str="a!";

var pattern=/\W/;

console.log(pattern.test(str));

var str="asqwed7";

var pattern=/[a-z]s[0-9]+/;

console.log(pattern.test(str));

//N*:

var str="aa7";

var pattern=/[a-z]*[0-9]+/;

console.log(pattern.test(str));

range:

var str="1a223";

var pattern=/[0-9]{2,}/;

console.log(pattern.test(str));

var str="D22SPCY";

var pattern=/^HYD[0-9]{2}SPCY$/;

console.log(pattern.test(str));



