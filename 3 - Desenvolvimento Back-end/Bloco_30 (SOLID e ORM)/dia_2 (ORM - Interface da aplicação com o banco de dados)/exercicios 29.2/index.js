const express = require('express')
const app = express();
const port = 3000

app.use(express.json());
app.use('/books', require('./controllers/bookController'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))