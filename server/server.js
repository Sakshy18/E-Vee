const express =  require("express");
const mysql = require('mysql');
const cors=require('cors');

const app =express();
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(express.json());
const db= mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "signup"

})

app.post('/signup', (req, res) => {
    const sql= "INSERT INTO login('username','password') VALUES (?)";
    const values=[
        req.body.username,
        req.body.password
    ]
    db.query(sql, [values],(err,data) => {
        if(err)
        {
            return res.json("error");
        }
        return res.json(data);
    })
})

app.listen(8081 , () =>
{
    console.log("listening");
})

