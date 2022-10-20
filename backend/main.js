import express from 'express';
import cors from 'cors';
import { db, initiliseDatabase } from './helpers/database.js';
import CreateGame from './routes/game/create.js';
import Login from './routes/game/login.js';
import Logout from './routes/game/logout.js';
import Terminate from './routes/game/terminate.js';
import Index from './routes/index.js';
import CreateUser from './routes/user/create.js';

// Creating a new express app
const app = express();

// Set up cors (cross-origin resource sharing)
app.use(
  cors(
    {
      origin: ['http://locahost:3000'], // Allowing requests ONLY from localhost:3000
      methods: ['GET','POST','DELETE'], // Allowing only GET, POST and DELETE requests
    }
  )
);

// Initialise the SQLITE3 database
initiliseDatabase();

// Adding an index route
app.get('/', Index);

// Adding a user create route
app.post('/api/user/create', CreateUser);

// Adding a users login route
app.post('/api/game/login', Login);

// Adding a create game instance route
app.post('/api/game/create', CreateGame);

// Adding a terminate game instance route
app.post('/api/game/terminate', Terminate);

// Adding a logout both users route
app.post('/api/game/logout', Logout);

// Making the app listen on port 8081
app.listen(8081, () => {
  console.log('\x1b[32m[✓]\x1b[0m Server is listening on http://localhost:8081');
});
