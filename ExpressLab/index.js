const express =require('express');
const path =require('path');
const members=require('./members')
const logger =require('./middleware/logger')

const app=express();

//3. set static folder
app.use(express.static(path.join(__dirname,'public')));

//work on this first
// app.get('/', (req , res)=>{
   
//     //at first no response on the browser we have to restart the server again
//     //to avoid this we have to install nodemon this constantly watch our server.
//     //npm i -D nodemon  //-D is for devlopent mode not production
//     //change the script in package.jison file 
//     //to run the nodemon us npm run dev
   
//     //1.res.send('<h1>Hello world!!</h1>')
//     //2.res.sendFile(path.join(__dirname,'public','index.html'));
    
//     //the above method is only accessing one file but we want to access more
//     //so we have to make it static folder

    
    


// })
// const members =[
//     {
//         id:1,
//         name:'elias',
//         email:'ela@gma'
//     },
//     {
//         id:2,
//         name:'abebe',
//         email:'abebe@gma'
//     }
// ]

//create middleware
// const logger =(req,res,next)=>{
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }

// //init middle ware
 app.use(logger);


//this is end point
// app.get('/api/members',(req,res)=>{
// res.json(members)//check in postman it is get;

// });

// //get single members
// app.get('/api/members/:id', (req,res)=>{
// //res.send(req.params.id); we can get the id we give to he url

// const found =members.some(member=> member.id === parseInt(req.params.id));
// if(found){
//     res.json(members.filter(member=> member.id === parseInt(req.params.id)))
// }else{
//     res.status(400).json({msg: 'no members'})
// }


// })


app.use('/api/members',require('./routes/api'))


const PORT = process.env.PORT || 5000; //look the eniveronment if not availabale look port 5000;

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)});