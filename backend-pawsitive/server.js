const express = require('express');
const app = express();

// Route for root
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
