// function f1(a=10,b=90){
//     console.log(a); // undefined
//     console.log(b); // undefined
// } 
// f1(80,100);

// /*

// variable hoisiting:

//  function f1(){
// var a,b; // undefined ,undefined
// console.log(a); // undefined
// console.log(b); // undefined

//  }

// */

function f1(){
    var a=100; 
    if(a>10){
        var a=900;
        console.log(a); //
    }
    console.log(a); //
}
f1();

/*

function f1(){
     var a;
     a=100;
     if(a>10){
         a=900;
         console.log(a); // 900
     }
     console.log(a);// 900
}

*/

function f1(){
    var a=100; 
    if(a>10){
        let a=900; // block scoped 
        console.log(a); //
    }
    console.log(a); //
}
f1();

/*

function f1(){
     var a;
     a=100;
     if(a>10){
         a=900;
         console.log(a); // 900
     }
     console.log(a);// 900
}


*/

