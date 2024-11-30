const express = require('express');
const bodyParser = require('body-parser');
const schoolRouter = require('./routers/schoolRouter');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use school routes
app.use(schoolRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
