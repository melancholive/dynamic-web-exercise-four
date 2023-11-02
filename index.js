// https://github.com/jayres/IDM-DynamicWeb/blob/master/exercise-four/Exercise-Four.md

const express = require('express');
const app = express();
const port = 4000;

const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");

app.use(express.static("public"));

app.use('/', indexRoute);
app.use('/about', aboutRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
