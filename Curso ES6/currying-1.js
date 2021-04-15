// function multi(a, b){
//     return a * b;
// }
// multi(4,5);
// multi(6,3);
// multi(6,5);
// multi(3,6);
// multi(5,7);
function multi(a){
    return function(b){
        return a * b;
    }
}

const multi1 = multi(4);

console.log(multi1(3));
console.log(multi1(5));
console.log(multi1(32));
console.log(multi1(7));
console.log(multi1(46));