const controller = {};

controller.create = (req, res) => {
  res.send('Adding new user');
};

controller.read = (req, res) => {
  res.send('Reading all user');
};

module.exports = controller;
