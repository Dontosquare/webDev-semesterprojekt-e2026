require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('GameCreators webshop kører');
});

// vores port er bare vores localhost halløj
// det er bare en lokalserver lige nu indtil vi løser hosting

app.listen(PORT, () => {
  console.log(`Server kører på http://localhost:${PORT}`);
});