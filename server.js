const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const connectDB = require('./config/db');

const port = process.env.PORT || 5000;
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/user'));
app.use('/api/tasks', require('./routes/task'));

app.listen(port, () =>
  console.log(`Server is running on localhost on port ${port}`)
);
