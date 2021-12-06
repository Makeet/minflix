const express = require('express');
const app = express();
const PORT = process.env.REACT_APP_PORT || 4000;

const db = require('./config/db');

app.get('/', (req, res) => {
    res.send('Server Response Success');
})

app.get('/api/test',(req, res)=>{
  db.query("SELECT * from test", (err, data)=>{
    if(err) throw err;
    res.send({data : data});    
  })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})