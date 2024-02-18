// Import required modules
const express = require('express');
const mongoose = require('mongoose');

const app = express ()
mongoose.connect("mongodb://127.0.0.1:27017/test")

const bookschema =mongoose.bookschema({
  title: String;
  author : String;
  genre :String,
  publication_year: String,
});





app.get('/books', async (req, res) => {
const data = await BookModele.find();
    res.send(data);
})


app.get('/books/:id', async (req, res) => {
 
    const bookid =req.params ["id"];
    const data = await BookModele.find({id:bookid});
    res.send (data);
  
});

// Create a new book
app.post('/books', async (req, res) => {
 
    const title: req.body.title;
    const authorBook: req.body.author;
    const genre: req.body.genre;
    
   const publicationYear: req.body.publicationYear;
  await BookModel.create({
    title:title, 
    author :authorBook,
    genre :generebook,
      publication_year: year
   
  })
   
    res.send(data);
});

// Update a book by ID
app.put('/books/:id', async (req, res) => {
 
    const book = await Book.findById(req.params.id);
    const authorBook =req.body.author;
    const data = await BookModel.findByIdAndUpdate({bookid ,{author;authorBook}});
    res.send("modified")

});

// Delete a book by ID
app.delete('/books/:id', async (req, res) => {
 
  const bookid =req.params ["id"];
  const data = await BookModel.findByIdDelete({bookid});
  res.send ("deleted");

});
app.listen(12,()=>console.log("server is running"));