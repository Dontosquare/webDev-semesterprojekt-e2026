//Siger at filen bruger express routing modul, som gør det muligt at lave routing til vores forskellige sider.
const express = require('express');

// Importerer express routing modul
const router = express.Router();

// Laver routing til alle vores sider, så vi kan bruge dem i app.js
router.get('/', (req, res) => res.render('home'));
router.get('/productsPage', (req, res) => res.render('productsPage'));
router.get('/about', (req, res) => res.render('about'));
router.get('/contact', (req, res) => res.render('contact'));

// Eksporterer routes, så vi kan bruge den i app.js
module.exports = router;