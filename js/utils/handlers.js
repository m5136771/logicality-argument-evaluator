//USE THIS to make HTML interactive
/* const test = document.getElementById('btn-submit');
function sayHello() {
    alert("Hello!");
}
test.addEventListener('click', sayHello); */



/* START */

// define new Object type
function Premise(symbol, part, isTrue) {
    this.symbol = symbol;
    this.part = part;
    this.isTrue = isTrue;
}

//init 4 premises
const p1 = new Premise();
const p2 = new Premise();
const p4 = new Premise();
const p3 = new Premise();

//container for created premises
const activePremises = [p1, p2, p3, p4];
const uniquePremises = [];

function findDuplicate(premise) {
    alert("finding duplicates for.." + premise.symbol + " " + activePremises[0].symbol);
    for (let x = 0; x < activePremises.length; x++) {
        if (activePremises[x] == undefined) {
            alert("Exit 1");
            return;
        } else if (activePremises[x].symbol == premise.symbol) {
            alert("Exit 2");
            return;
        } else {
            uniquePremises.push(premise.symbol);
            alert("premise pushed to Unique!");
        }
    }
}

// When test button is clicked, get all input and add to premises objects
function buildArgument() {
    //IF: check if operator exists, get 'implication1'
    if (document.getElementById("operator-dd1")) {
        var o1 = document.getElementById('operator-dd1').value; // returns 'implication1'
    } else {
        return;
    }

    //1: check if premise exists, get 'P'
    if (document.getElementById("firstPremise")) {
        p1.symbol = document.getElementById('firstPremise').value;
        findDuplicate(p1);
    } else {
        return;
    }    

    //IF: handle operator, add antecedent property to p1
    if (o1 == 'implication1') {
        p1.part = 'antecedent';
    } else {
        return;
    }

    //THEN: check if operator exists, get 'implication2'
    if (document.getElementById("operator-dd2")) {
        var o2 = document.getElementById('operator-dd2').value; // returns 'implication2'
    } else {
        return;
    }

    //1: check if premise exists, get 'Q'
    if (document.getElementById("secondPremise")) {
        p2.symbol = document.getElementById('secondPremise').value;
        findDuplicate(p2);
    } else {
        return;
    } 

    //THEN: handle operator, add consequent property to p2
    if (o2 == 'implication2') {
        p2.part = 'consequent';
    } else {
        return;
    }

    //GIVEN check if operator exists, get 'given_truth'
    if (document.getElementById("operator-dd3")) {
        var o3 = document.getElementById('operator-dd3').value; // returns 'given_truth'
    } else {
        return;
    }

    //2. check if premise exists, get 'P'
    if (document.getElementById("thirdPremise")) {
        p3.symbol = document.getElementById('thirdPremise').value;
        findDuplicate(p3);        
    } else {
        return;
    }    
    
    //GIVEN handle operator, give p3 true property
    if (o3 == 'given_truth') {
        p3.isTrue = true;
    } else {
        return;
    }

    // THEREFORE check if operator exists, get 'conclusion'
    if (document.getElementById("operator-dd4")) {
        var o4 = document.getElementById('operator-dd4').value; // returns 'conclusion'
    } else {
        return;
    }

    //3. check if premise exists, get 'Q'
    if (document.getElementById("fourthPremise")) {
        p4.symbol = document.getElementById('fourthPremise').value;
        findDuplicate(p4);
    } else {
        return;
    }  

    //THEREFORE: handle operator, give p4 part 'conclusion'
    if (o4 == 'conclusion') {
        p4.part = 'conclusion';
    } else {
        return;
    }

    

    /* FOR TESTING */
    var div = document.body.appendChild(document.createElement('div'));
    div.id = 'testDiv';
    div.innerHTML = '<div class="active_premises">' + "symbol: " + activePremises[0].symbol + ", part :" + activePremises[0].part + ", isTrue :" + activePremises[0].isTrue + "<br>" + "symbol: " + activePremises[1].symbol + ", part :" + activePremises[1].part + ", isTrue :" + activePremises[1].isTrue + "<br>" + "symbol: " + activePremises[2].symbol + ", part :" + activePremises[2].part + ", isTrue :" + activePremises[2].isTrue + "<br>" + "symbol: " + activePremises[3].symbol + ", part :" + activePremises[3].part + ", isTrue :" + activePremises[3].isTrue + "<br>" + '</div>';
    //expecting 'P''antecedent'undefined

    var div2 = document.body.appendChild(document.createElement('div'));
    div2.id = 'testDiv2';
    div2.innerHTML = '<div class="active_premises">' + "symbol: " + uniquePremises[0] + uniquePremises[1] + '</div>';
}

/* Now I have...
 activePremises[
        { as p1
            "symbol": "P",
            "part": "antecedent",
            "isTrue": undefined
        },
        { as p2
            "symbol": "Q",
            "part": "consequent",
            "isTrue": undefined
        },
        { as p3
            "symbol": "P",
            "part": undefined,
            "isTrue": true
        },
        { as p4
            "symbol": "Q",
            "part": "conclusion",
            "isTrue": undefined
        }
    ]
*/

// How do I calculate validity?
// "An argument is valid if whenever the hypotheses are all true, the conclusion MUST also be true."

//Construct Truth Table
//A truth table is a device that represents how the truth value of an argument depends on the truth of the propositions in every possible scenario.

//1.Determine the number of lines or rows in the table.
//Count the number of different capital letters. The number of lines is 2 raised to the power of this number.

/* function countUnique() {
    alert("Starting...");
    
    for (var x = 0; x < activePremises.length; x++) {
        const s = activePremises[x].symbol;
        alert("Looking at " + s);
        
        for (var y = 0; y < uniquePremises.length; y++) {
            if (s == uniquePremises[y].symbol) {
                return;
            } else {
                uniquePremises.push(s);
                alert("pushed " + s);
            }
        }
    }
    alert("Exiting...")
} */




// Assume all premises are true; set all x.isTrue in activePremises to true












/* const premises = Array.from(document.getElementsByClassName("dropdown-content"));
const elements = [
 document.getElementById("a_true"),
 document.getElementById("b_true"),
 document.getElementById("c_true")
]

var aTrue = document.getElementById("a_true");
var bTrue = document.getElementById("b_true");
var cTrue = document.getElementById("c_true");
answer = '';

function HandleA () {
var A = document.getElementById('aChecked').checked;
premises.A = A
answer = 'A is true?: ' + premises.A;
elements[0].innerHTML = answer;
}

function HandleB () {
var B = document.getElementById('bChecked').checked;
premises.B = B
answer = 'B is true?: ' + premises.B;
bTrue.innerHTML = answer;
return B;
}

function HandleC () {
var C = document.getElementById('cChecked').checked;
premises.C = C
answer = 'C is true?: ' + premises.C;
cTrue.innerHTML = answer;
return C;
}

function HandleNegation() {
    premises.forEach(element => {
        negation(element);
        return element;
    });
} */