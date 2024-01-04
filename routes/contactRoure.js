const express=require('express')
const router=express.Router()
const {getContact,createContact,updateContact,deleteContact}=require('../controllers/contactControllers')
// const {createContact}=require('../controllers/contactControllers')
// const {updateContact}=require('../controllers/contactControllers')
// const {deleteContact}=require('../controllers/contactControllers')

router.route('/').get(
    getContact
).post(
        createContact                                 //if same url we can write like this instead of commented part
)


router.route('/:id').put(
    updateContact
)

router.route('/:id').delete(
    deleteContact
    )


// router.route('/').get((req,res)=>{
//     res.status(200).json({"message":"get all contacts"})
// })

// router.route('/').post((req,res)=>{
//     res.status(200).json({"message": `create contact ${req.body}`})
// })



 
// router.route('/:id').put((req,res)=>{
//     res.status(200).json({"message":`update message for ${req.params.id}`})
// })

// router.route('/:id').delete((req,res)=>{
//     res.status(200).json({"message":`delete message for ${req.params.id}`})
// })
module.exports=router;