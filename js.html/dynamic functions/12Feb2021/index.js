class Bank{
    name;
    accountNumber;
    accountBalance;
     withdraw(amount){
        
         if(amount > this.accountBalance){
            console.log("insufficient balance");
            return;
         }
         else
         {
             this.accountBalance= this.accountBalance - amount;
             
             console.log("Final Balance:"+ this.accountBalance);
         }
     }

     deposit(amount){
        
        if(amount <=0){
           console.log("incorrecr amount");
           return;
        }
        else
        {
            this.accountBalance= this.accountBalance + amount;
            
            console.log("Final Balance:"+ this.accountBalance);
        }
    }

    transfer(amount, towhichAccount){

    }
}
var customer= new Bank();
customer.name="ravi";
customer.accountNumber=12331231;
customer.accountBalance=9000;
console.log(customer);
customer.withdraw(2000);
customer.withdraw(5000);
customer.withdraw(3000);
customer.deposit(10000);

/*

  Assesment-2:


  Create a form that should contains the following details,

  productId, productName, description, price, seller

  we should store these 5 fields in an object and then add them to products array.

    {
        pid: "",
        name: ""
    }


  As soon as the product gets added display it on UI I.,e all the 
  products which are added should be shown on the UI.

  Note: make basic validations to  productId, productName, description, price, seller



  time duration: 50 mins

  submit: saikumar@digital-lync.com

  

*/