const express = require('express')
const cors = require('cors');
const { urlencoded } = require('express');
const mysql = require('mysql2')

const app = express();

app.use(cors());
app.use(urlencoded({extended:true}))
app.use(express.json())


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Password@492004',
    database:'hotel1'
})


db.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("db connected");
    
    let q = `
        CREATE DATABASE IF NOT EXISTS hotel1
    `
    
    db.query(q, (err, res)=>{
        // if(err) console.log(err);
        // else console.log(res);
    })

    q = 'USE hotel1'
    db.query(q);

    q = `CREATE TABLE IF NOT EXISTS customer
        (
            name VARCHAR(50),
            email VARCHAR(50),
            phone VARCHAR(50),
            place VARCHAR(50),
            roomId INT,
            noOfPeople INT,
            days INT,
            price INT
        )
    `;

    db.query(q);
})





app.post('/', (req,res)=>{
   const {name, email, phone, place, noOfPeople, days, roomId, price} = req.body;
    const q = 
    `
        INSERT INTO customer
        (name, email, phone, place, noOfPeople, days, roomId, price)
        VALUES
        (?,?,?,?,?,?,?,?)
    `

    db.query(q, [name, email, phone, place, noOfPeople, days, roomId, price], (err, data)=>{
        if(err) res.send(0);
        else res.send(data);
    })
     return 1;
})


app.get('/read', (req, res)=>{
    const email = req.query.email;
    console.log("emaik: ", email);
    
    const q = 
    `
        SELECT * FROM customer WHERE email = ?
    `

    db.query(q, [email], (err, data)=>{
        if(err) console.log(err);
        else return res.json(data[0])
    });
    
})


app.listen(8000, ()=>{
    console.log("port listening on port 8000");
})