var str="hellob1";

var pattern=/[^a-z]/;

console.log(pattern.test(str));

var str="hello H H  how H are you";

var pattern=/h/gi;

console.log(str.match(pattern).length);

//[abc]:  a or b or c//

var str="helloam";

var pattern=/[abc]m/;

console.log(pattern.test(str));


//[^abc]:

var str="hellob";

var pattern=/[^abc]/;

console.log(pattern.test(str));

