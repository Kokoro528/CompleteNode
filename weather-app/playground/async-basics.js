console.log('Starting app;');

setTimeout(() => {
console.log ('Inside of callback');
}, 2000);

for (let i = 0; i < 4; i++) {
        setTimeout(() => {console.log('i: ' + i)}, 1000);
}


var j = 0;

for (j = 0; j < 4;  j++) {
        setTimeout(() => {console.log('j: ' + j)}, 1000);
}

console.log('Finishing up');
