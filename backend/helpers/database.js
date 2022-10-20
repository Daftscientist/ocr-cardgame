import sqlite3 from 'sqlite3';

export let db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      // If there is an error, log it to the console
      return console.error(err.message);
    }
    // Printing a success message for the database connection
    console.log('\x1b[32m[✓]\x1b[0m Connected to the SQlite database');
});

export function initiliseDatabase() {
    // Creating the users table if it does not already exist
    db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)");
}

