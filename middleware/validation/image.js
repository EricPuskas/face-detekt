const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateImageInput(data) {
  let errors = {};

  data.input = !isEmpty(data.input) ? data.input : "";

  if (data.input.includes("data:image/"))
    errors.image = "Invalid URL provided.";

  if (Validator.isEmpty(data.input)) {
    errors.image = "Please enter a URL before scanning.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
