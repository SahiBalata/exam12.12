const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors');
var moment = require('moment');
app.use(cors())
app.use(express.json())

var mysql      = require('mysql');
var userDB = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tomerinc'
});


app.get('/getteams', (req, res) =>{
    userDB.query(`SELECT team_name FROM teams;`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      });
})

app.get('/getmeets', (req, res)=>{
    userDB.query(`SELECT * FROM meet;`, function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        res.send(results)
      });
})

app.get('/:id', (req, res)=>{
    userDB.query(`SELECT *
    FROM meet
    WHERE team_name ="${req.params.id}";`, function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        res.send(results)
      });
})

app.post('/meet', (req, res) =>{
   
    userDB.query(`INSERT INTO meet (start, end, description, room, team_name)
    VALUES ("${req.body.from}", "${req.body.to}", "${req.body.description}" , "${req.body.RoomNum}", "${req.body.teamname}");`, function (error, results, fields) {
        
        console.log(req.body)
        res.send("New meeting was created")
      });
})


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))