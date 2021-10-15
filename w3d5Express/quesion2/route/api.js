const express =require('express')
const router= express.Router();



//redirect to /result
router.post('/' , (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.send(`Welcome ${name} with age ${age}`);
});

module.exports=router;