const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from server 🚀. Hi Dude!!',
    status: 'success',
    data: {
      name: 'Sibashrit',
      role: 'Software Lead'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});