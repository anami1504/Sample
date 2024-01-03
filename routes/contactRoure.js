const express=require('express')
const router=express.Router()

router.route('/').get((req,res)=>{
    res.status(200).json({"message":"get all contacts"})
}).post((req,res)=>{
    res.status(200).json({"message": `create contact ${req.body}`}) //if same url we can write like this instead of commented part
})

// router.route('/').get((req,res)=>{
//     res.status(200).json({"message":"get all contacts"})
// })

// router.route('/').post((req,res)=>{
//     res.status(200).json({"message": `create contact ${req.body}`})
// })
 
router.route('/:id').put((req,res)=>{
    res.status(200).json({"message":`update message for ${req.params.id}`})
})

router.route('/:id').delete((req,res)=>{
    res.status(200).json({"message":`delete message for ${req.params.id}`})
})
module.exports=router;