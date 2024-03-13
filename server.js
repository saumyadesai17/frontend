const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()



app.use(express.static(path.join(__dirname, './public')));
// app.use(express.static(path.join(__dirname, 'css')));
// app.use(express.static(path.join(__dirname, 'images')));

app.get('/',(req,res)=>{
    // res.writeHead(200, { "Content-type": "text/html" });
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(5000,()=>{
    console.log(`SERVER IS RUNNING ON PORT 5000`)
})