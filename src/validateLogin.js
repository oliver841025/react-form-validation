export default function validateLogin(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Password needs to be more than 10 chars";
  }

  return errors;
}
// email
// the string to be more than 0 chars
// need the string to be an email
// password
// be more than 10 chars
// the string to be more than 0 chars
