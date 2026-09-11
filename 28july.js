// //promisee for asynchronous as an object
// //js is singlethreaded
// const promiseOne = new Promise((resolve , reject)=>{
//     console.log("Promise task 1");
//     resolve("Promises passed by using resolver");
//     let msg = false ;
//     if(!msg==true){
//         console.log("message using promise failed");
//     }
//     else{
//         console.log("error..");
        
//     }
//     setTimeout(()=>{
//     console.log(resolve());
//     },2000)
// });
// promiseOne.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// //async / await
// console.log("1");
// async function test(){
//     console.log("2");
//     await console.log("3");
//     console.log("4");
// }
// test();
// console.log("5");

// //create promise 
// let username = "admin";
// let password = "1234";

// let loginPromise = new Promise((resolve, reject) => {
//     if (username === "admin" && password === "1234") {
//         resolve({
//             username: username,
//             password: password
//         });
//     } else {
//         reject("ERROR: Username or Password is incorrect");
//     }
// });

// loginPromise
//     .then((data) => {
//         console.log("Login Successful");
//         console.log("Username:", data.username);
//         console.log("Password:", data.password);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// // create promises that will print username and password using resolve and 
// // if username and pass not found then it will callreject state and print ERROR...
// const promiseTwo = new Promise((resolve , reject)=>{
//     setTimeout(function(){
//         let err=true;
//         if(!err){
//             resolve("user:ABC,password:1234");
//         }else{
//             reject("ERROR...:data fail");
//         }
// },2000);
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


async function test(){
    console.log("message");
    const response = await fetch("student.json");
    console.log(response.status);
    const stdn = await response.json();
    return stdn;
    console.log("message2");
}
test().then((res) => {
    console.log(res);
}).catch((error) => {
    console.error("Failed to fetch: ", error);
});
