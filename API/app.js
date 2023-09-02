// app.js
const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const apiKey = 'YOUR_SPOONACULAR_API_KEY'; // Replace with your Spoonacular API key

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
        const recipe = response.data.recipes[0];
        res.render('index', { recipe });
    } catch (error) {
        console.error('Error fetching data from Spoonacular API:', error.message);
        res.status(500).send('An error occurred while fetching data.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
