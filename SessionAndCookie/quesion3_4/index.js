const express = require('express');
const path= require('path');
const session=require('express-session');
const app =express();

app.set('view engine', 'ejs');
app.set('views' ,path.join(__dirname, 'view'));

app.use('/addtoCart',express.urlencoded({extended:false}));

app.use(session({secret:'eliasgirmateshome',resave:false,saveUninitialized:false}));

let Product =require('./model/Product');
let Cart=require('./model/Cart');



app.get('/product/:id',(req,res)=>{
    res.render('product',{product:Product.getAllProducts()[req.params.id]})
});



app.post('/addtoCart',(req,res)=>{
   
  req.session[req.body.id]=(req.session[req.body.id]||0)+1;
  res.redirect('back');

});



app.get('/cart',(req,res)=>{

    let cart=new Cart();

    for(let id in req.session)
    {
     console.log(req.session[parseInt(id)]);

       if(!isNaN(id)){
           cart.add(req.session[parseInt(id)],req.session[id]);
       }
    }

  res.render("cart",{cart:cart});

});


app.listen(5000);

