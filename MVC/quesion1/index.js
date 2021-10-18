const { time } = require('console');
const express = require('express'); 
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {

 const date = new Date();
 res.render("index", {
 time: date.toTimeString(),
 hour :date.getHours()


 });
});


app.listen(5000);
