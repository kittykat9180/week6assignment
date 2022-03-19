const expect = chai.expect;

let testValue = 26;

describe('War Game', () => {
    describe('Player Hand', () => {
        it(`Number of cards should equal testValue = ${testValue}`, () => {
            const testDeck = new Deck(freshDeck());
            const testPlayer = new Player(testDeck.cards.splice(0,26));
            expect(testPlayer.hand.length).to.be.equal(testValue);
        });
    })
})