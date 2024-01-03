const contactRouter=require('./routes/contactRoure.js')
const express=require("express")
const dotenv=require("dotenv").config()
const app=express()

app.use('/api/contacts',contactRouter)

const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
// app.get('/api/contacts',(req,res)=>{
//     res.status(200).json({"message":"get all contacts"})
// })

