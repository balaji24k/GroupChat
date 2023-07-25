const express = require("express");
// const LocalStorage = require('node-localstorage');
// const localStorage = LocalStorage('./scratch');
// console.log(LocalStorage,">>>>>>>>>>>>>Local")

const loginRouter = express.Router();

loginRouter.get("/",(req,res,next) => {
    console.log("form","<<<<<form");
    res.send(
        `<form 
            onsubmit="localStorage.setItem('userName', document.getElementById('username').value)" 
            action="/login" 
            method="POST">
            <input 
                id="username" 
                type="text" 
                name="userName">
            <button type="submit">Login</button>
        </form>`)
});

loginRouter.post("/login",(req,res,next) => {
    res.redirect("/message")
})

module.exports = loginRouter;