var observable = require("data/observable");
var personViewModel = new observable.Observable();

personViewModel.noOfCards = 10;
personViewModel.cards = [];

personViewModel.currentCardIndex = 0;

personViewModel.currentCard = 0;
personViewModel.nextCard = 0;

personViewModel.score = 0;
personViewModel.streak = 0;

personViewModel.cardsLeft = 0;


personViewModel.startNewGame = function() {
    this.set("score", 0);
    this.set("streak", 0);

    this.shuffleCards();

    this.getFirstCard();
}

personViewModel.goHigher = function() {
    if(!this.hasMoves())
        return;

    if(this.currentCard < this.nextCard)
        this.goodGuess();
    else
        this.badGuess();

    this.getNextCard();
}

personViewModel.goLower = function() {
    if(!this.hasMoves())
        return;

    if(this.currentCard > this.nextCard)
        this.goodGuess();
    else
        this.badGuess();

    this.getNextCard();
}

personViewModel.getFirstCard = function() {
    this.currentCardIndex = -1;
    this.getNextCard();
}

personViewModel.getNextCard = function() {
    this.currentCardIndex = this.currentCardIndex +1;
    index = this.currentCardIndex;

    this.set("currentCard", this.cards[index]);
    this.nextCard = this.cards[index+1];

    this.set("cardsLeft", this.noOfCards - index -1);
}

personViewModel.hasMoves = function() {
    return this.cardsLeft > 0;
}

personViewModel.goodGuess = function() {
    this.set("streak", this.streak + 1);
    this.set("score", this.score + this.streak);
}

personViewModel.badGuess = function() {
    this.set("streak", 0);
}

personViewModel.shuffleCards = function() {
    var cardDeck = [];
    for(var i=0; i<this.noOfCards; i++) {
        cardDeck.push(i+1);
    }

    var shuffledCards = [];
    while(cardDeck.length > 0) {
        var index = getRandom(cardDeck.length);

        var card = cardDeck.splice(index, 1)[0];

        shuffledCards.push(card);
    }

    this.set("cards", shuffledCards);
}

module.exports = personViewModel;

function getRandom (max) {
    return Math.floor(Math.random() * max);
}