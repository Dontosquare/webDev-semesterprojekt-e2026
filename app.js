require('dotenv').config();

// Importerer Express Handlebars
const { create } = require('express-handlebars');
const express = require('express');
const pageRoutes = require('./src/routes/pages');

const app = express();


app.use(express.json());

const hbs = create({ extname: '.hbs' });
// Registrerer Handlebars som Express' template engine
app.engine('.hbs', hbs.engine);
// Angiver .hbs som standardvisningsformat
app.set('view engine', '.hbs');
// Angiver mappen med Handlebars-visninger
app.set('views', 'src/views');

app.use('/', pageRoutes);

app.use("/products", require("./src/routes/productRoutes"))
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server kører');
});