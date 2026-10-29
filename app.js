require('dotenv').config();
const { create } = require('express-handlebars');
const express = require('express');
const pageRoutes = require('./src/routes/pages');

const app = express();

app.use(express.json());

const hbs = create({ extname: '.hbs' });
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', 'src/views');

app.use('/', pageRoutes);

app.use("/products", require("./src/routes/productRoutes"))
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server kører');
});