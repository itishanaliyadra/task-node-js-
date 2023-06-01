const express = require('express');
const app = express();
const db = require('./config/mongoose');
const path = require('path')

//routes
const admin = require('./routes/admin');
const user = require('./routes/user')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());git init
app.use('/uplodes', express.static('uplodes'))


app.use('/api/v1/admin', admin)
app.use('/api/v1/user', user);
app.listen(1212, (err) => {
    if (err) {
        console.log("serever is not on !!");
    }
    console.log('URl is localhost://' + 1212);
})