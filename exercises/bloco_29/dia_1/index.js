const express = require('express');
// require('dotenv').config();
const bodyParser = require('body-parser');


const app = express();
const { Book } = require('./models/books');

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.status(200).json({ message: 'batata'})
})

app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
  res.status(200).json(books)
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado'})
  } 
})

app.get('/book/:id ', async(req, res) => {
  const { id } = req.params
  try {
  const books = await Book.findByPk(id);

  res.status(200).json(books)
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado'})
  } 
})

app.post('/books/', async (req, res) => {
  const { title, author, pageQuantity } = req.body
  try {
  const books = await Book.create({ title, author, pageQuantity });

  res.status(200).json(books)
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado'})
  } 
})

app.put('/books/:id', async (req, res) => {
  const { id } = req.params
  const { title, author, pageQuantity } = req.body

  try {
    const [updateBook] = await Book.update(
      {  title, author, pageQuantity },
      { where: { id } },
    );
    console.log(updateBook);

    if(!updateBook) return res.status(404).json({ message: 'Usuário não encontrado' });


  res.status(200).json([ updateBook])
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado'})
  } 
})

app.delete('/books/:id', async (req, res) => {
  const { id } = req.params
  try {
  const books = await Book.destroy({ where: { id } });
  console.log(books) 


  res.status(200).json({ message: 'livro removido com sucesso'})
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado'})
  } 
})

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`))