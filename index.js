const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.get('/', (req, res)=> {
    res.send('Hello from my own smaarty pant!!')
})

const users = [
    {id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: 'o17888888888'},
    {id: 2, name: 'shabnur', email: 'shabnur@gmail.com', phone: 'o17888888889'},
    {id: 3, name: 'shucorita', email: 'shucorita@gmail.com', phone: 'o17888888887'},
    {id: 4, name: 'moushumi', email: 'moushumi@gmail.com', phone: 'o17888888885'},
    {id: 5, name: 'diti', email: 'diti@gmail.com', phone: 'o17888888886'},
    {id: 6, name: 'bobita', email: 'bobita@gmail.com', phone: 'o17888888883'},
    {id: 7, name: 'opi korim', email: 'opikorim@gmail.com', phone: 'o17888888882'},
]

app.get('/users', (req, res) =>{
    if(req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }
})

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    res.send(user)
})

app.post('/user', (req, res) =>{
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('listing to port', port)
})