import { db } from '../../helpers/database.js';

export default function CreateUser(req, res) {
    // Get the email and password from the request body
    const { email, password } = req.body;
    // Check if the email and password are not empty
    if (email && password) {
        // Check if the email is already in use
        db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
            if (err) {
                // If there is an error, send a 500 status code and the error message
                res.status(500).send(err.message);
            } else if (row) {
                // If there is a row, send a 400 status code and a message
                res.status(400).send("Email is already in use");
            } else {
                // If there is no error and no row, insert the user into the database
                db.run("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err) => {
                    if (err) {
                        // If there is an error, send a 500 status code and the error message
                        res.status(500).send(err.message);
                    } else {
                        // If there is no error, send a 200 status code and a message
                        res.status(200).send("User created");
                    }
                });
            }
        });
    } else {
        // If the email or password is empty, send a 400 status code and a message
        res.status(400).send("Email and password are required");
    }
}