// console.log("Hello world")

const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.send("Hello home page k xa halkhabar")
})

const PORT=8080;
app.listen(PORT,()=>{
 console.log(`Server listening the to the PORT=${PORT}`)
})