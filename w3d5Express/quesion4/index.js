const express =require('express');
const path =require('path');
const app=express();


app.use('/result',express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();

    let response="<!DOCTYPE html>"+
    "<html>"+
        "<head>"+
            "<title>My App</title>"+
            `<link href="${hour>=6&&hour<=18?'/css/day.css':'/css/night.css'}" rel="stylesheet">`+
        "</head>"+
        "<body>"+
            "<form action='/result' method='POST'>"+
                "<label>Name <input type='text' name='name'></label>"+
                "<label>Age <input type='text' name='age'></label>"+
                "<input type='submit' value='submit query'></label>"+
            "</form>"+
        "</body>"+
    "</html>";
    res.send(response);
});
app.post('/result',(req,res)=>{
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});
app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.send(`Welcome ${name} with age ${age}`);
});
app.use('/css', express.static(path.join(__dirname, 'css')));

const PORT = process.env.PORT || 5000; //look the eniveronment if not availabale look port 5000;

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)});