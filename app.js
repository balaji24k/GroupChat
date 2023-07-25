const express = require("express");
const bodyParser = require("body-parser")

const loginRoutes = require("./routes/login");
const messageRoutes = require("./routes/message");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoutes);

app.use(messageRoutes);

// app.use((req,res,next)=> {
//     res.send(`<h2>from app.js</h2>`)
// });

app.listen(3000)