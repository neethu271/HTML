function f1(a,b,...restparams){
    console.log(a,b);
   console.log(restparams);
  
   restparams.forEach(function(e){
       console.log(e);
   })
  }
  
  f1(10,20,40,50);

  //Spread Operator:
function f1(a,b,c,d){
  console.log(a+1,b,c,d);
}
var arr=[1,2,3,4];

f1(...arr); // spread operator

class Bank{
    username;
    password;
    login(username, password){
         if(username == "abc" && password =="abc"){
            console.log("logged in")
         }
         else
         {
             console.log("username/password incorrect");
         }
    }
}

var customer1=new Bank();
customer1.login("abc","ab")

