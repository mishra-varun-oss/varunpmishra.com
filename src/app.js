const path = require('path');
const express = require('express');
const body_parser = require('body-parser');

const app = express();

const public_directory = path.join(__dirname, "../public"); //'/var/www/varunpmishra.com/public'
const views_directory = path.join(__dirname, "../templates/views");

const configs = require(path.join(__dirname, "./tools/configs.js"));

require('dotenv').config(configs.src_path);

app.use(express.static(path.join(public_directory)));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.set('view engine','hbs')
app.set('views',views_directory);

app.get('/', (req, res) => {
	res.render('index');
})

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Varunpmishra.com is up on port ${port}!`);
})
