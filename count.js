let counter = function(arr) {
    return 'abc xyz ' + arr.length + ' evf ertgrt rtrt';
}

let adder = (a,b) => a+b;

let pi = 3.142;

/********** Exporting in the end **************** */

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

/********** Alternatively **************** */

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}

/********** Alternatively, exporting while initializing **************** */

// module.exports.counter = function(arr) {
//     return 'abc xyz ' + arr.length + ' evf ertgrt rtrt';
// }

// module.exports.adder = (a,b) => a+b;

// module.exports.pi = 3.142;

