//global variable

var a=10; // Global variable

{
    //Block scope
    console.log(a)
}
{
    // I can have as many as block scope
    let b = 20;
}
console.log(b)