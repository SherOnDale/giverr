const ResponseBody = require('../utils/classes/ResponseBody');

const controller = {};

controller.login = (req, res) => {
  res.send('Logging in user');
};

controller.logout = (req, res) => {
  const responseBody = new ResponseBody();
  responseBody.setSuccess();
  responseBody.setMessage('Logged out successfully');
  responseBody.removePayload();
  res.send(responseBody);
};

module.exports = controller;
