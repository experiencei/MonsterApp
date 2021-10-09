const multiply = function (first) {
    return function  xWhat(xecond) {
        return first * xecond
    }
}

const multipyBYtwo = multiply(2);
var four = multipyBYtwo(2);

console.log(four);