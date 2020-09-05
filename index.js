const express = require('express')
const data = require("./data/index");
const app = express();
var cors = require('cors')
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/v1/countrylist', (req, res) => {
    res.send(data)
})

app.get('/ajax', (req, res) => {
    res.send(req.query.data)
})

app.listen(4001,()=>{
    console.log("server started")
});