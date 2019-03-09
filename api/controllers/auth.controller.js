const controller = {};

controller.login = (req, res) => {
  res.send('Logging in user');
};

controller.logout = (req, res) => {
  res.send('Logging out user');
};

module.exports = controller;
