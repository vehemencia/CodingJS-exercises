/* Given two strings, a and b, return the result of putting them together in the order abba.
"Hi" and "Bye" returns "HiByeByeHi". */

function makeAbba(a, b) {
    return (a + b + b + a);
}