const pg = require('../db/pg');
const ResponseBody = require('../utils/classes/ResponseBody');
const controller = {};

controller.create = (req, res) => {
  pg.query(
    'INSERT INTO users (email, hash) VALUES ($1, $2)',
    [name, email],
    (error, results) => {
      const responseBody = new ResponseBody();
      if (error) {
        responseBody.setMessage(
          'Error creating a new user. Please try again later'
        );
        responseBody.removePayload();
        return res.status(500).json(responseBody);
      }
      responseBody.setSuccess();
      responseBody.setMessage('Successfully created a new user');
      responseBody.removePayload();
      res.status(200).json(responseBody);
    }
  );
};

controller.read = (req, res) => {
  pg.query('SELECT * FROM users ORDER BY id ASC', (error, users) => {
    const responseBody = new ResponseBody();
    if (error) {
      responseBody.setMessage(
        'Error retrieving the users from database. Please try again later'
      );
      responseBody.removePayload();
      return res.status(500).json(responseBody);
    }
    responseBody.setSuccess();
    responseBody.setMessage('Successfully retrieved users from the database');
    responseBody.setPayload({
      key: 'users',
      value: users
    });
    res.status(200).json(responseBody);
  });
};

module.exports = controller;
