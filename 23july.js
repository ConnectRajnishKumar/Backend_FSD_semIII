//synchronous and asynchronous
console.log("task3");
function hello()
{
    
    setTimeout(function(){
        console.log("task1");
        console.log("task4");
    }, 2000);
}
function display(){
    console.log("learning FSD");
}
display();
// hello();