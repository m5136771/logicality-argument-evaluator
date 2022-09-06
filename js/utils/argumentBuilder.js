

class Argument {
    constructor(title, author, yearPublished, validity, soundness, fullText) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;

        this.majorPremise = MajorPremise;
        this.minorPremise1 = MinorPremise1;
        this.minorPremise2 = MinorPremise2;
        this.minorPremise3 = MinorPremise3;
        this.conclusion = Conclusion;
        this.validity = validity;
        this.soundness = soundness;

        this.fullText = fullText;
    }
};

class MajorPremise {
    constructor(sentences = []) {
        this.sentences = sentences;
    }
}

class MinorPremise1 {
    constructor(sentences = []) {
        this.sentences = sentences;
    }
}

class MinorPremise2 {
    constructor(sentences = []) {
        this.sentences = sentences;
    }
}

class MinorPremise3 {
    constructor(sentences = []) {
        this.sentences = sentences;
    }
}

class Conclusion {
    constructor(sentences = []) {
        this.sentences = sentences;
    }
}

const isValid = function() {
    Argument.validity = false; // eventually will evaluate validity, for now, just changes validity to false
}

const isSound = function() {
    Argument.soundness = false; // eventually will evaluate soundness, for now, just changes soundness to false
}

// --and break each Sentence into parts of speech (noun, pronoun, verb, etc.)

//isValid();
console.log(MajorPremise.sentences);

export default Argument