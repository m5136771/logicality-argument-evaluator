// Takes input in symbolic logic expressions, generators Truth Table

// DEFINE VARIABLES


//Test
function testCalc(A, B, C) {
    const result = (A || B) && C
    // prints "A", returns true
    document.getElementById('answer').innerHTML= "The answer is " + result;
}



// Modus ponens
// "P implies Q. P is true. Therefore Q must also be true."



// Modus tollens
// "If P, then Q. Not Q. Therefore, not P."