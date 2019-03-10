const crypto = require('crypto');

module.exports = (password, salt) => {
  if (!password) return '';
  try {
    return crypto
      .createHmac('sha1', salt)
      .update(password)
      .digest('hex');
  } catch (error) {
    return '';
  }
};
