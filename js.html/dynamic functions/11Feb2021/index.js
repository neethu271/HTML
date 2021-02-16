class Calc{
    add(a,b){
        console.log(a+b);
    }
    sub(a,b){
        console.log(a-b);
    }
}

class SciCalc extends Calc{
    squr(a){
        console.log(a*a);
    }
    cube(a){
        console.log(a*a*a);
    }
}

var sciCalc= new SciCalc();

sciCalc.squr(10);
sciCalc.sub(20,10);

var calc= new Calc();

calc.cube(10);

/*Problem Statement:
Create a customer class that should contain a function called createAccount 
which takes name, address, age, adharcard number*/

//name, address, age, adharcard number

class Customer{
    name;
    address;
    age;
    adhaarCard;
     createAccount(name,address,age,adhaarCard){

        this.name=name;
        this.address=address;
        this.adhaarCard=adhaarCard;
        this.age=age;
     }
}

var customer= new Customer();
customer.createAccount("ravi","hyd",21,9010101);
console.log(customer);

