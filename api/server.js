const express = require('express');
const helmet = require('helmet');
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');

const app = express();

app.use(helmet());
app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.listen(5000, error => {
  console.log('Listening on port 5000');
});
