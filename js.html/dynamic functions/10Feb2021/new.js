var str="line1\n\n\t\tline2\n\n\t\t\tline3";

var line1="This is line1";

var str1=`

             ${line1} 

                        line2

                                    line3

      line4

`

console.log(str);

console.log(str1);

var clients=[
    {
          name: "First",
           company: "First Company", 
          location:"First Location",
    },
    {
          name: "Second",
           company: "Second Company", 
          location:"Second Location",
    },
    {
          name: "Third",
           company: "Third Company", 
          location:"Third Location",
    },
    {
          name: "Fourth",
           company: "Fourth Company", 
          location:"Fourth Location",
    }

]

var ceo="Ravi";

for(var i=0;i<clients.length;i++){

    var client=clients[i];

    console.log(`
    
    
      Hello ${client.name},

      We are visiting your ${client.company} to the location ${client.location} for 
      project discussion.

      Thanks,
      ${ceo}
    
    `)
}
