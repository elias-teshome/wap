const express =require('express')
const router= express.Router();

router.get('/', (req, res) => {
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

module.exports=router;