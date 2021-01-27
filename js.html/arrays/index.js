var array=[100,200,300,400,500,600,700,"hello","abc","hey"];

array.forEach(function(i){
  console.log(i);
})

var result=array.filter(function(i){
    return typeof i == "string";
})


console.log(result);
