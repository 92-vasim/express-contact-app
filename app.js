const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
main().catch(err => console.log(err));
app.use(express.urlencoded({extended : true}))
app.use(express.static('templates'))
app.set('view engine', 'pug')
app.set('templates', path.join(__dirname, 'templates'))
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contact');

}

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String
});

const Contact = mongoose.model('Contact', ContactSchema);

app.get('/', (req, res) => {

  res.sendFile('index.html', {root: __dirname} , params)
})


app.post('/', (req, res) => {
  let data = new Contact(req.body);
  console.log(data)
  data.save()
  res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/contact', (req, res) => {

  res.status(200).render('contact.pug')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})