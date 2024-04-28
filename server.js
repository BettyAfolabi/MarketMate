
const express = require('express');
const bodyParser = require('body-parser');
const registerRoute = require('./registerRoute.js'); // Corrected filename
const loginRoute = require('./loginRoute.js'); // Corrected filename

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mounting routes
app.use('/pages/register', registerRoute);
app.use('/pages/login', loginRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
