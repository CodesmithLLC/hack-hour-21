/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) {
        return 0;
    }

    if (power === 1) {
        return base;
    }

    return base * pow(base, power - 1);

}


// console.log(pow(3, 3));
// 
// console.log(pow(2, 8));
// 
// console.log(pow(6, 1));
// 
// console.log(pow(3, 0));

module.exports = pow;
