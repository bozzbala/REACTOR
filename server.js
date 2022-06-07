const express = require('express');
const path = require('path');

const app = express();
const createPath = (page) => path.resolve(__dirname, `${page}.html`)

app.listen(3000, (error) =>{
    if(error){
        throw error;
    }
    else{
        console.log(`listening to port ${3000}`);
    }
})

app.get("/", (req, res) => {
    HLELLO
})
