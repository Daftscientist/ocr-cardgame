function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function format_color(one, two) {
    return [one + two, two + one];
}

const CARD_TYPES = ['red', 'black', 'yellow'];

const CARD_TYPES_EXPANDED = [
    [["red", "black"], "red"],
    [["yellow", "red"], "yellow"],
    [["black", "yellow"], "black"]
];

let cards = [];

[...Array(3)].map((_, i) => {
    [...Array(10)].map((_, j) => {
        cards.push({
            color: CARD_TYPES[i],
            number: j + 1
        });
    });
});

while (!cards === undefined || !cards.length == 0) {
    const shuffled_cards = shuffle(cards);
    let PLAYER1_CARDS = [];
    let PLAYER2_CARDS = [];
    PLAYER1_CARDS.push(shuffled_cards[0]);
    shuffled_cards.shift();
    PLAYER2_CARDS.push(shuffled_cards[0]);
    shuffled_cards.shift();

    PLAYER1_CARDS.map((card, i) => {
        console.log(`${card} | ${shuffled_cards.length}`)
        if (card.color === PLAYER2_CARDS[i].color) {
            const number = Math.max(card.number, PLAYER2_CARDS[i].number);

            if (card.number === PLAYER2_CARDS[i].number) {
                cards.splice(0, cards.length)
                console.log("The cards were the same number and color :)");
            }

            if (number === card.number) {
                PLAYER1_CARDS.push(card);
                cards.splice(i, 1);
                console.log("Player 1 wins");
            }

            if (number === PLAYER2_CARDS[i].number) {
                PLAYER2_CARDS.push(card);
                cards.splice(i, 1);
                console.log("Player 2 wins");
            }
        } else {
            CARD_TYPES_EXPANDED.map((item, index) => {
                if (item[0].includes(card.color) && item[0].includes(PLAYER2_CARDS[i].color)) {
                    if (item[1] === card.color) {
                        PLAYER1_CARDS.push(card);
                        cards.splice(i, 1);
                        console.log("Player 1 wins");
                    }
                    if (item[1] === PLAYER2_CARDS[i].color) {
                        PLAYER2_CARDS.push(card);
                        cards.splice(i, 1);
                        console.log("Player 2 wins");
                    }
                }
            });
        }
    });

}