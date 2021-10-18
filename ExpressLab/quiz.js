const express=require('express');
const app =express();

app.use(express.urlencoded({extended:false}));

let list=[];

app.get('/',(req,res)=>{

    let output='<ul>';
    for(let i of list){
        output+=`<li>${i}</li>`
    }
    output+= "</ul><a href='/add'>Add</a>"
    res.send(output);

});

app.get('/add',(req,res)=>{

    let form= `<form action="/" method='POST'>
                   <input name ="item" type="text"/>
                   <input type="submit"/>
                    
                   </form>`

        res.send(form);
});

app.post('/',(req,res)=>{
    list.push(req.body.item);
    res.redirect(303,'/');
})


const PORT = process.env.PORT || 5000; //look the eniveronment if not availabale look port 5000;

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)});