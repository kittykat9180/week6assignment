// start the game
function startGame(){
    let deck1 = new Deck(freshDeck());
    deck1.shuffle();
    //puts cards into players hands
    let player1 = new Player(deck1.cards.splice(0,26));
    let player2 = new Player(deck1.cards.splice(0,26));
    //Plays each players last card
    while(player1.hand.length > 0){
        let p1 = player1.hand.pop();
        let p2 = player2.hand.pop();
        console.log(`p1: ${p1.suit}${p1.value}  p2: ${p2.suit}${p2.value}`);
        //Adds points to players score
        if(p1.value > p2.value){
            player1.score++;
        } else if(p1.value < p2.value){
            player2.score++;
        }
    } 
    console.log(`Player 1 points: ${player1.score}
    Player 2 points: ${player2.score}`);
    if(player1.score > player2.score){
        console.log('Player 1 is the winner!')
    } else{
        console.log('Player 2 is the winner!')
    }
}
var suits = ['H', 'S', 'C', 'D']; //card suits
var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K']; //value of each card

class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}
//combine suits and values arrays
function freshDeck(){
    return suits.flatMap(suit => {
        return values.map( value => {
            return new Card(suit, value);
        });
    });
}
//shuffles the deck
class Deck {
    constructor(cards){
        this.cards = cards;
    }
    shuffle(){
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }
}
//creates play class with score and hand
class Player {
    constructor(cards) {
        this.score = 0;
        this.hand = cards;
    }
}

startGame();