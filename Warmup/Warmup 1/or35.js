// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. 

function or35(n) {
    return (n % 5 === 0 || n % 3 === 0) ? true : false;
}

// This is other way to solve it -> const or35 = (n) => (n%5 === 0 || n%3 ===0) ? true : false;