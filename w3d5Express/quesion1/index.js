const express =require('express');

const app=express();


//Router middleware
app.use(require('./route/api'))


const PORT = process.env.PORT || 5000; //look the eniveronment if not availabale look port 5000;

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)});