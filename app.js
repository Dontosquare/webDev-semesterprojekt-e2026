require('dotenv').config();

// Importerer Express Handlebars
const { create } = require('express-handlebars');
const express = require('express');
const pageRoutes = require('./src/routes/pages');

const app = express();

<<<<<<< HEAD
// Opretter Handlebars-konfiguration med .hbs som filendelse
=======
app.use(express.json());

>>>>>>> b9ab9df26b830e48b99e5e75d5b664a919c88edf
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