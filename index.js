const express = require('express');
const axios = require('axios');
const app = express();

const numElemen = 25;

app.get('/', async (req,res)=>{
    let items = [];

    for (let index = 0; index <= numElemen; index++) {
        await axios.get('https://api.chucknorris.io/jokes/random').then((res)=>{

            return res.data ? items.push(res.data) : NULL;
        });
    }

    res.json(items);
});

app.listen(3000,()=>{
    console.log('Server run in http://[::1]:3000');
});