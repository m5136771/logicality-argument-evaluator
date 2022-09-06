/* PROPOSITIONAL LOGIC */
//Note: If two expressions generate the same truth table, then those expressions are *equivalent* and can replace one another.

// Base Operators: 
function negation(A) {
    return !A;
}

function conjunction(A, B) {
    return (A && B);
}

function disjunction(A, B) {
    return (A || B);
}

function implication(A, B) {
  // logical implication means that either A is false or B is true. Therefore, (A -> B) === (!A || B)
  return (!A || B);
}

function implicationTransposition(A, B) {
    var B = !B;
    var A = !A;
    var result = implication(A, B);
    return result;
}

function bicondition(A, B) {
    // !! forces value to boolean, but retains truth value: A === !!A
    return (!!A === !!B);
    // === ((A && B) || (!A && !B));
}

// Secondary Operators:
function exclusive(A, B) {
    return (A ? !B : B);
    // === (A === !B);
    // === (A !== B);
}

function ternary(A, B) {
    return (A ? B : C);
    // === (!A || B) && (A || C);
}

function simplify(A) {
    if ((A && !A) || (A && false)) {
        return false
    } else if ((A || !A) || (A || true) || (A || false) || (A && true)) {
        return true;
    } 
}

/* Note: To resolve nested if statements..

if (A) {
  if (B) {
    C
  }
}
// is equivalent to
if (A && B) {
  C
}

*/

export default implication;