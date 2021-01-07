function authenticate(username, password){
    return (username=="ravi" && password == "ravi123" ? true : false);
 }
 
 var flag = authenticate("ravi","ravi123");
 console.log(flag);
 