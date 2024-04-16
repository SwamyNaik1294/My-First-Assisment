//1. Decision - making conditional statements
//2. Looping/Iteration statements
//3. Jump Statements

//conditional stements:
//1. if, 2. if-else, 3. if-else-if ladder, 4. switch

//1. if

// if(1<2)
// {
//     console.log("1 is less than 2");
// }

//2. if-else
// let a=100, b=20
// if(a>b)
// {
//     console.log("a is big");
// }
// else
// {
//     console.log("b is big");
// }

//3. if-else-if ladder
// let a=10, b=200, c=25;
// if(a>b)
// {
//     console.log("a is big");
// }
// else if(c>b)
// {
//     console.log("c is big");
// }
// else{
//     console.log("b is big");
// }

//4. switch
let a=10, b=20, c=30;
switch(a)
{
    case 10: console.log("value is 10");
    break;
    case 20: console.log("value is 20");
}
switch(b)
{
    case 10: console.log("value is 10");
    break;
    case 20: console.log("value is 20");
}
switch(c)
{
    case 20: console.log("value is 20");
    break;
    case 10: console.log("value is 20");
    break;
    default: console.log("Let's Learn JS no matching case found");
}