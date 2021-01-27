var config=Object.freeze({
    port:9011,
    url:"https://www.facebook.com",
    endPoint: "/users"
})
config.port=23988;
config.machineId=90999;
console.log(config);

console.log(Object.isFrozen(config));


var str="hello";

var arr=str.split("");

console.log(arr);
arr.push("e");

console.log(arr);


var obj={
    name:"ravi",
    address: "hyderabad"
}

var s={id:101};

Object.assign(s,obj);

console.log(s);