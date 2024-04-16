//Jump statement
//1. Break, 2. continue

//1. break

// for(a=1; a<=50; a++)
// {
//     console.log("page no is" +a);
//     if(a==40){
//         console.log("break statement occurrd");
//         break;
//     }
// }


//2. continue

for(a=1; a<=50; a++)
{
    if(a==5)
    {
        console.log("continue statement occurrd");
        continue;
    }
    if(a==10)
    {
    console.log("break statement occured");
    break;
    }
    console.log("page no is " + a);
}