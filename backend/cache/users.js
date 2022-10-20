// Create a new game cache object
const usersCache = {};

// Function to add to the game cache
function add(email, user) {
    usersCache[gameId] = game;
}

// Function to get from the game cache
function get(email) {
    return usersCache[gameId];
}

// Function to delete from the game cache
function remove(email) {
    delete usersCache[gameId];
}

// Export the functions
export { add, get, remove };