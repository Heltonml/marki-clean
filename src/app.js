const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`🚀🚀🚀 Server is listening on PORT:{ ${PORT} }. 🚀🚀🚀`);
});

app.use('/', (req, res, next) => {
    res.status(200).json({ message: `Rest-api is running 🚀` })
});

app.use(async (req, res, next) => {
    res.status(400).json({ message: `Route is no where to be found.` });
});

module.exports = app;
