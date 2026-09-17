//Event 
//Event loop
console.log("synchronous task");
const f1=()=>{
    console.log("f1");
}
const f2 = () => {
    console.log("f2");
}
const f3 = function main()
{
    console.log("this event loop");
    setTimeout(f1, 50);
    setTimeout(f3, 50);
    new Promise((resolve, reject) => {
        resolve("i am promise1")
    }).then((result) => {
        console.log(result);
    });


    new Promise((resolve, reject) => {
        resolve("i am promise2")
    }).then((result) => {
        console.log(result);
    });
}

f3();
main();
        