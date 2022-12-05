const express = require("express")
const path = require("path")
const app = express();
const fs = require("fs")
const port = 80;
app.use(`/static`, express.static(`static`));
app.use(express.urlencoded())

app.get(`/`, (req,res)=>{
    res.status(200).render(`index.pug`)
})
app.post(`/`,(req,res)=>{
    console.log(req.body);
    name = req.body.name
    location= req.body.location
    message= req.body.message
    let outputTowrite =`the name of the client is: ${name},location is:  ${location}, and message given is: ${message}`
    fs.writeFileSync(`output.text`,outputTowrite)


    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render(`index.pug`, params)
})
app.listen(port, ()=>{
    
    console.log(`the application started successfully on port ${port}`);
});

