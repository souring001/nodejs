// console.log('hello world');

// non blocking
setTimeout(function(){
    console.log('hello');
}, 1000);
console.log('world');

// how about this? -> compile error
/*
setTimeout(console.log('hello');, 1000);
console.log('world');
*/

// blocking
/*
let start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log('world');
*/
