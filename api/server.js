const express = require('express');
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');

const app = express();

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.listen(5000, error => {
  console.log('Listening on port 5000');
});
