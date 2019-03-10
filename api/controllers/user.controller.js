const pg = require('../db/pg');
const ResponseBody = require('../utils/classes/ResponseBody');
const utils = require('../utils/functions');
const controller = {};

controller.create = (req, res) => {
  const { email, password } = req.body;
  const salt = utils.makeSalt();
  const hash = utils.hashPassowrd(password, salt);
  console.log(hash);
  pg.query(
    'INSERT INTO users (email, hash, salt) VALUES ($1, $2, $3)',
    [email, hash, salt],
    (error, results) => {
      console.log(error);
      const responseBody = new ResponseBody();
      if (error) {
        responseBody.setMessage(
          error.message ===
            'duplicate key value violates unique constraint "users_email_key"'
            ? 'Email already exists'
            : 'Error creating a new user. Please try again later'
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
      value: users.rows
    });
    res.status(200).json(responseBody);
  });
};

controller.delete = (req, res) => {
  pg.query('DROP TABLE IF EXISTS users', error => {
    const responseBody = new ResponseBody();
    responseBody.removePayload();
    if (error) {
      responseBody.setMessage(
        'Error deleting the table. Please try again alter'
      );
      return res.status(500).json(responseBody);
    }
    responseBody.setSuccess();
    responseBody.setMessage('Successfully deleted the table');
    res.status(200).json(responseBody);
  });
};

module.exports = controller;
