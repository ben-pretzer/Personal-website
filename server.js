const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Handle all requests and return the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/download/:filename', (req, res) => {
  const { filename } = req.params;
  const file = __dirname + '/downloads/' + filename;

  res.download(file); // Initiates the file download with appropriate headers
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});