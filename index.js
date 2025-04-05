
const express =require('express');
const app=express();
const path=require("path");

port=8888;

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port , ()=>{
    console.log(`'app is listening on port ${port}'`);
})

app.get('/',(req,res)=>{
    res.render("home.ejs");
});

app.get('/ig/:username',(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    console.log(instadata);
    let data=instadata[username];
    console.log(data);
    if(data){
        res.render("ig.ejs",{data });
    }else{
        res.render("error.ejs");
    }
});

app.get('/rolldice',(req,res)=>{
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{randomNumber});
})

