var employee= { // this
     name:"ravi",
     address: "hyd",
     eid:101,
     details: function(company_name, company_address){
          console.log(this.name +"\t" + this.address);
          console.log(company_name+ "\t"+ company_address);
     }
}
// employee.details();

var emp={
    name:"kiran",
    address: "banglore",
    eid:8998,
   
}
var emp2={
    name: "anil",
    address: "chennai"
}
// employee.details.call(emp);

var x=["DigitalLync","Madhapur"];

//employee.details.call(emp2,x[0],x[1]);

employee.details.apply(emp2,x);





// employee.details.apply(emp2,["DigitalLync","Madhapur"]);


// employee.details.apply(emp2);




//Task:  Self Learn Bind function and closures






