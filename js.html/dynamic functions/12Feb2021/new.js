//Function Generator:

function* f1(){
    console.log("line1");
    console.log("line2");
    yield "block-1";
    console.log("line3");
    yield "block-2";
    console.log("line4");
    console.log("line5");
    console.log("line6");
}
var iterator=f1();

iterator.next();

console.log("some code");

iterator.next();

iterator.next();


class Test{
    a=10;
    b=20;
    static x=90;
    static y=900;

    m1(){
        console.log("this is m1()");
    }

    static m2(){
        console.log("this is m2()");
    }
}
var test= new Test();

console.log(test.a);
console.log(test.b);
test.m1();
Test.m2();
console.log(Test.x);
console.log(Test.y);
