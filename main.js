const CARD_TYPES = ['red', 'black', 'yellow']; // Array of card types

const CARD_TYPES_EXPANDED = [
    [["red", "black"], "red"],
    [["yellow", "red"], "yellow"],
    [["black", "yellow"], "black"]
]; // Array of card attributes.

function shuffle_array(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
} // Shuffles a given array.

let cards = []; // Creates an empty array for the cards.

[...Array(3)].map((_, i) => { // Runs enclosed code 3 times.
    [...Array(10)].map((_, j) => { // Runs enclosed code 10 times.
        cards.push({
            color: CARD_TYPES[i],
            number: j + 1
        }); // Pushes the card to the cards array.
    });
});

shuffle_array(cards); // Shuffles the array of cards.

while (!cards === undefined || !cards.length == 0) {
    let PLAYER1_CARDS = []; // Creates an empty array for player 1's cards.
    let PLAYER2_CARDS = []; // Creates an empty array for player 2's cards.

    const PLAYER_1_CARD = cards[0]; // Gets the first card in the array.
    const PLAYER_2_CARD = cards[1]; // Gets the second card in the array.

    // Need to do the rest of the code and work out the logic to run though each selected card

} // Runs enclosed code while the cards array is not empty.