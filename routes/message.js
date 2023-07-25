const express = require("express");
const fs = require("fs");

const messageRouter = express.Router();

messageRouter.get("/message", (req, res, next) => {
  fs.readFile("data.txt", (err,data) => {
    if (err) {
      console.log(err);
    }
    console.log(data,">>>>readFileData")
    res.send(
      `<h2>${data ? data : "No messages"}</h2>
      <form 
        onsubmit="document.getElementById('userName').value=localStorage.getItem('userName')" 
        action="/message" 
        method="POST"
      >
        <input id="message" type="text" name="message" placeholder="message">
        <input id="userName" type="hidden" name="userName">
        <button type="submit">add</button>
      </form>`
    );
  })
  
});

messageRouter.post("/message", (req, res, next) => {
  console.log(req.body, ">>>>>>>>entered message");
  fs.writeFile("data.txt",`${req.body.userName}-${req.body.message} `, {flag:"a"}, (err) => {
    err ? console.log(err) : res.redirect("/message")
  })
});

module.exports = messageRouter;
