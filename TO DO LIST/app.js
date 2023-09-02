// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add-task', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
