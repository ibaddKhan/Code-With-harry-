const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

//  Endpoints
app.get('/',(req,res)=>{
    const con ='This is the best content ever made'
    const params ={'title': 'Pug is Great', 'content':con }
    res.status(200).render('index.pug', params)
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
