const express =require('express');
const path =require('path');
const app=express();

app.get('/', (req, res) => {
   
    res.sendFile(path.join(__dirname,'public','index.html'));
 });




app.use('/css', express.static(path.join(__dirname, 'css')));

const PORT = process.env.PORT || 5000; //look the eniveronment if not availabale look port 5000;

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)});