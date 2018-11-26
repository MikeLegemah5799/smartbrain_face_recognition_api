const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('this works!');  
});

app.listen(3000, () => {
    console.log('App running on port 3000!');
});

/*
Routes

/ --> res = this is working
/signin --> POST request respond with success or fail
/register --> POST request 




*/