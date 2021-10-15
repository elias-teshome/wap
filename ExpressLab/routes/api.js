const express =require('express')
const router= express.Router();
const members=require('../members')
//this is end point
router.get('/',(req,res)=>{
    res.json(members)//check in postman it is get;
    
    });
    
    //get single members
router.get('/:id', (req,res)=>{
    //res.send(req.params.id); we can get the id we give to he url
    
    const found =members.some(member=> member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member=> member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg: 'no members'})
    }
    
    
    })

    //create members
router.post('/',(req,res)=>{
   const newMembers={
       id:req.body.id,
       name:req.body.name,
       email:req.body.email
       
   }
   members.push(newMembers);
   res.json(members);
})

module.exports=router;