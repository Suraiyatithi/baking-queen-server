const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})



// app.get('/chef/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedNews = news.find(n => n.id === id);
//     res.send(selectedNews)
// })



app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})