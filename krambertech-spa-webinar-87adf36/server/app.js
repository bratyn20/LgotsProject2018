import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));
[
    // {
    //     id
    //     otvet: {

    //     }
    // }
]

app.post(,(req,res)=> {
    res.body.map(row => {

    })
})


// RESTful api handlers
app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/account', (req, res) => {
    console.log(req.body);
    db.createAccount(req.body).then(data =>{console.log('dwqtr');
        res.send(data)});
    // res.send({data111: 'dssawuuu'});
});

app.post('/loggg', (req,res) =>{
    db.logAccount(req.body).then(data => {
        res.send(data)
    })
})

app.post('/crtlgota', (req, res) => {
    console.log(req.body , "www");
    db.createLgota(req.body).then(data =>{console.log('qqq all');
        res.send(data)});
    // res.send({data111: 'dssawuuu'});
});

app.get('/lgota', (req, res) => {
    db.listLgota().then(data => res.send(data));
});

app.post('/crtnews', (req, res) => {
    console.log(req.body , "QQ all");
    db.createNews(req.body).then(data =>{console.log('qqq all news');
        res.send(data)});
    // res.send({data111: 'dssawuuu'});
});

app.get('/news', (req, res) => {
    db.listNews().then(data => res.send(data));
});

// app.delete('/notes/:id', (req, res) => {
//     db.deleteNote(req.params.id).then(data => res.send(data));
// });

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
