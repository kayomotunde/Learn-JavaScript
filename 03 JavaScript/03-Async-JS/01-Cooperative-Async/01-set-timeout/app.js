/* setTimeout(fn, x)
    fn  -   function
    x   -   time in milliseconds
*/

function sayHello(who) {
    alert(`Hello ${who}!`)
};

let myGreeting = setTimeout(sayHello, 2000, 'Kayode');
/*
    Finally, if a timeout has been created, 
    you can cancel it before the specified time has elapsed by calling clearTimeout(), 
    passing it the identifier of the setTimeout() call as a parameter
*/

clearTimeout(myGreeting);