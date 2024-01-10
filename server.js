const contactRouter=require('./routes/contactRoure.js')
const express=require("express")
const dotenv=require("dotenv").config()
const app=express()
const errorHandler=require("./middlewares/errorHandler.js")
app.use(express.json())

//middleware function
// app.use((req,res,next)=>{

//     if(req.method=="GET")
//     {
//         console.log(`method is get requested url is ${req.url}`)
//     }

//     console.log("request received")
//    next()

// })


//error handling middleware
// app.use(async(err,req,res,next)=>{
//     res.status(err.statusCode).json({"status":err.status,"message":err.message})
//     next()
// })


app.use('/api/contacts',contactRouter)

app.use(errorHandler)

// app.use(async(err,req,res,next)=>{
//     res.status(err.statusCode).json({"status":err.status,"message":err.message})
//     next()
// })

const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
// app.get('/api/contacts',(req,res)=>{
//     res.status(200).json({"message":"get all contacts"})
// })

