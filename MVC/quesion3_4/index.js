const express = require('express'); 
const path = require('path');
const app = express();

let Product=require("./mode/Product");
let Cart=require("./mode/Cart");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {

    res.render("index",{products:Product.getAllProducts()});

});


app.post('/cart',(req,res)=>{

    let tempCart=new Cart();
    let id=req.body.id;
    let item=  Product.getAllProducts();
    for(let product of item){
        
        tempCart.add(product, Math.ceil(Math.random()*100));
    }
    res.render("shopCart",{items:tempCart.getAll()});
    

})

app.listen(3000);
