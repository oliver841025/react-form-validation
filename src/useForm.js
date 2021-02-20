import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // new state for errors
  // function that validates these errors
  // pass these errors back to form
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handling errors
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    // check to see if ther are no errors
    if (Object.keys(errors.length === 0 && isSubmitting)) {
      submit();
    }
    // call our callback
  }, [errors]);

  const submit = () => {
    console.log("good job");
  };
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
