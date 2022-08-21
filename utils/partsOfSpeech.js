// Commonly listed English parts of speech are noun, verb, adjective, adverb, pronoun, preposition, conjunction, interjection, numeral, article, or determiner.
// how many of these have finite options?

// !nouns

// !verbs

// !adjectives

// !adverbs

// pronouns are maybe identifiable

// prepositions YES
// There are about 150 prepositions in English. From https://7esl.com/list-of-prepositions/

const prototypicalPrepositions = [
    'a', 'aboard', 'about', 'abt', 'above', 'abreast', 'absent', 'across', 'after', 'against', 'along', 'aloft', 'alongside', 'amid', 'amidst', 'mid', 'midst', 'among', 'amongst', 'anti', 'apropos', 'around', 'round', 'as', 'aslant', 'astride', 'at', 'atop', 'ontop', 'bar', 'barring', 'before', 'behind', 'below', 'beneath', 'neath', 'beside', 'besides', 'between', '\'tween', 'beyond', 'but', 'by', 'chez', 'circa'//, c., ca., come, concerning, contra, counting, cum, despite, spite, down, during, effective, ere, except, excepting, excluding, failing, following, for, , from, in, including, inside, into, less, like, minus, modulo, mod, near, nearer, nearest, next, notwithstanding, of, o\', off, offshore, on, onto, opposite, out, outside, over, o\'er, pace, past, pending, per, plus, post, pre, pro, qua, re, regarding, respecting, sans, save, saving, short, since, sub, than, through, thru, throughout, thruout, till, times, to, t\', touching, toward, towards, under, underneath, unlike, until, unto, up, upon, versus, vs.,v., via, vice, vis-à-vis, wanting, with, w/, within, w/i, without, \'thout, w/o,'
];

const prepFinder = function(someArray) {
    const prepArray = [];

    someArray.forEach(word => {
        if(prototypicalPrepositions.indexOf(word) !== -1) {
            prepArray.push(word);
        };
    });

    someArray.splice(0, someArray.length, ...prepArray);
};


// conjunctions YES

// interjections maybe

// numerals maybe

// articles maybe

// determiners maybe



export default prepFinder