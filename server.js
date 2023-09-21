const express = require("express");
const path = require('path');
const termData = require('./db/terms.json');
const PORT = 3000;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/getData', (req, res) => {
    console.log(termData);
    res.json(termData)});

app.get('/getData/:new', (req,res) => {
    console.log(req)
    const requestedNoun = req.params.new.toLowerCase();
    for (let i =0 ; i<termData.length; i++){
        if (requestedNoun === termData[i].name){
            return res.json(termData[i])
        } else if (requestedNoun === termData[i].category){
        const result = termData.filter((cat) => cat.category === requestedNoun);
        
        return res.json(result);

        }
    }
})

app.get('/json', (req, res) => {
    res.json(termData);
    })
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})

