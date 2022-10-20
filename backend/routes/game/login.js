import { get as gameGet, add as gameAdd, remove as gameRemove, genId } from '../../cache/game.js';
import { add as userAdd, get as userGet, remove as userRemove } from '../../cache/users.js';


export default function Login(req, res) {
    // Fetch the email1 and password1 from the request body
    const { email1, password1, email2, password2 } = req.body;
    // Check if the emails and passwords are not empty
    if (email1 && password1 && email2 && password2) {
        // Check if email1 and email2 are in the database
        db.get('SELECT * FROM users WHERE email = ?', [email1], (err, row) => {
            if (err) {
                // If there is an error, send a 500 error
                res.status(500).send({ error: 'Internal Server Error' });
            } else if (row) {
                // If there is a row, check if the password1 matches the password in the database
                if (row.password === password1) {
                    // Check if email2 is in the database
                    db.get('SELECT * FROM users WHERE email = ?', [email2], (err, row) => {
                        if (err) {
                            // If there is an error, send a 500 error
                            res.status(500).send({ error: 'Internal Server Error' });
                        } else if (row) {
                            // If there is a row, check if the password2 matches the password in the database
                            if (row.password === password2) {
                                // Add both users to the cache
                                userAdd(email1, { email: email1, password: password1 });
                                userAdd(email2, { email: email2, password: password2 });
                                // Check if there is a game instance with the two users
                                if (gameGet(`${email1}${email2}`) !== undefined) {
                                    // Send the game ID back to the client
                                    res.send({ gameId: gameGet(`${email1}${email2}`).gameId });
                                } else {
                                    const gameData = { 
                                        gameId: genId(), users: [email1, email2], 
                                        player1Cards: {}, player2Cards: {} 
                                    }; // Creating the game data
                                    // Add the game to the cache
                                    gameAdd(gameData.gameId, `${email1}${email2}`, gameData);
                                    // Send the game ID back to the client
                                    res.send({ gameId: gameData.gameId });
                                }
                            } else {
                                // If the password2 doesn't match, send a 401 error
                                res.status(401).send({ error: 'Incorrect password' });
                            }
                        } else {
                            // If there is no row, send a 404 error
                            res.status(404).send({ error: 'User not found' });
                        }
                    });
                } else {
                    // If the password1 doesn't match, send a 401 error
                    res.status(401).send({ error: 'Incorrect password' });
                }
            } else {
                // If there is no row, send a 404 error
                res.status(404).send({ error: 'User not found'});
            }
        });
    };
}
