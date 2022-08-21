import Argument from '../utils/argumentBuilder.js';
import prepFinder from '../utils/partsOfSpeech.js';

// initialize new argument object
const gettysburgAddress = new Argument(
    'The Gettysburg Address',
    "Abraham Lincoln",
    1863,
    'unknown',
    'unknown',
    'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure.'
);

// define sentences
//const sentenceArray = gettysburgAddress.fullText.split(/\. |\.|\; |\;/);
const sentenceArray = gettysburgAddress.fullText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

// define words
const wordArray = [];
for (const sentence of sentenceArray) {
    wordArray.push(sentence.split(" "));
};

//prepFinder won't work because each sentence creates an array with all words within a second array.
// need to separate each subArray and then run prepFinder for each.
// or.. why use the sentenceArray if I'm splitting all words anyway? Just use fullText and split into words? No. Because I need to be able to diagram each sentence individually. Keep separate.


//prepFinder(wordArray);

console.log(wordArray);