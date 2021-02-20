import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
import "./index.css";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <div className="div-form">
      <h1>Come to join us by filling the form 👇</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            className={`${errors.email && "inputError"}`}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Your email"
          ></input>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            className={`${errors.password && "inputError"}`}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Your password"
          ></input>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button className="sub-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

// form
// label / input for email
// label / input for password
// signup button

// handle changes
// handle submit

//custom react hooks

// handle errors
// show errors if there are errors

export default Form;
