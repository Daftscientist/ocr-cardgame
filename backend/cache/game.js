// Create a new game cache object
const gameCache = {};

// Function to add to the game cache
function add(gameId, mixedUsersId, game) {
    gameCache[mixedUsersId] = game;
}

// Function to get from the game cache
function get(mixedUsersId) {
    return gameCache[mixedUsersId];
}

// Function to delete from the game cache
function remove(mixedUsersId) {
    delete gameCache[mixedUsersId];
}

function genId() {
    min = Math.ceil(10000);
    max = Math.floor(900000000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Export the functions
export { add, get, remove, genId };