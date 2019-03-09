class ResponseBody {
  constructor() {
    this.error = true;
    this.message =
      'There was a problem handling your request. Please try again later.';
    this.payload = {};
  }

  setSuccess() {
    this.error = true;
  }

  setMessage(message) {
    this.message = message;
  }

  setPayload({ key, value }) {
    this.payload[key] = value;
  }
}

module.exports = ResponseBody;
