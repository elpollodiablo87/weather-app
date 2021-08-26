// The endpoint
const projectData = {};
// Express to run server and routes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// The main folder
app.use(express.static('website'));

// Body parser and cors middle wares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


// Spin up the server
const port = 3000;
const serverStart = ()=> console.log(`Server started at port ${port}`)
app.listen(port, serverStart());

//Get route

app.get('/getData', (req, res) =>{
    res.send(projectData)
});

//Post route

app.post('/postDate', (req, res) => {
    //posting the three variables from app.js
    projectData.temperature = req.body.temperature;
    projectData.date = req.body.date;
    projectData.userMood = req.body.userMood;
    //Ending the response
    res.end()
})