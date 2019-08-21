const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const connectDB = require('./config/db');

const port = process.env.PORT || 5000;
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/users', require('./routes/user'));
app.use('/api/tasks', require('./routes/task'));

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.send(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () =>
  console.log(`Server is running on localhost on port ${port}`)
);
