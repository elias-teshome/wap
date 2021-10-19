const express=require('express');
const path=require('path');
const cookieParser=require('cookie-parser');
const app=express();
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'view'));

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index',{cookie:req.cookies})
})

app.post('/',(req,res)=>{
    res.cookie(req.body.name,req.body.value);
    res.redirect("back");

})



app.listen(5000,()=>{console.log("Server running at port 5000")})