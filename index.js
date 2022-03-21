const express = require('express');

const app = express();
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(9000, err => {
    if(err){
        return console.log(err);
    }
    console.log('server started!')
})

app.get('/course', (req, res) => {
    res.send({course: 'web57'});
})

app.get('/course/random', (req, res) => {
    arr = [{"course": "c4e"},
           {"course": "ci"},
           {"course": "web57"}]
    res.send(arr[Math.floor(Math.random() * 3)]);
})

app.get('/even', (req, res) => {
    let {from, to} = req.query;
    let index = 0;
    let arr = []
    while(from <= to){
        if(from % 2 == 0){
            arr[index] = from;
            index++;
        }
        from++;
    }
    res.send(arr);
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/auth/login', (req, res) => {
    
})