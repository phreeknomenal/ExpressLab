const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact-form', (req, res) => {
    // console.log(req.body.name);
    // console.log(req.body.email);
    let formArray = [];
    let formObj = {
        'name': req.body.name,
        'email': req.body.email
    }
    formArray.push(formObj);
    fs.appendFileSync('formLog.json', JSON.stringify(formArray), (err) => {
        if (err) console.error(err);
        console.log('File was updated successfully!');
    });
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);