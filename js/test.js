// import { implication } from "logicalc/operators.js";





function operatorDropdown() {
    // Get dropdown value from onchange()
    var dd = document.getElementsByClassName("dd_operators");
    var value = dd.value; //returns null, given_truth, implication1, implication2, equivalence, negation, conjunction, logical_disjunction, exclusive_disjunction, conclusion

    // Handle dropdown value
    if (value === "implication1") {
        
        alert("It worked!");
    } else {
        
        alert("What?");
    }
    
    alert("Test says: " + dropdown + value + event.target);
}


// take symbol for premise as 'antecedant'

// next dropdown

// second dropd: 'THEN'
// take symbol for premise 'consequent'

// third dropd: 'GIVEN'
// take symbol for premise

// fourth dropd: 'THEREFORE'
// take symbol for premise as 'conclusion'

// calculate truth table.

// display validity (given all premises are 'T'), evaluates to 'T'

// ask for known truth values
// display soundness.


// export default {CreatePremise, FirstDropdown}