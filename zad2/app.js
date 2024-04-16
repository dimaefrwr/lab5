const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

app.use('/book', booksRouter);
app.use('/author', authorsRouter);
