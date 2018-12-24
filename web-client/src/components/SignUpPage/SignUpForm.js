import React from "react";
import PropTypes from "prop-types";

import "./SignUpForm.scss";
import { InlineError, Button } from "../common";

const SignUpForm = ({
  fieldErrors,
  formFields,

  handleSignUp,
  handleFieldChange
}) => (
  <form className="auth-form signup-form">
    <h3 className="auth-form__header signup-form__header">Sign Up</h3>
    <div className="auth-form__username signup-form__username">
      <label className="auth-form-label signup-form-label">Username:</label>
      {fieldErrors.username && <InlineError text={fieldErrors.username} />}
      <input
        type="username"
        name="username"
        value={formFields.username}
        className="auth-form-input signup-form-input"
        onChange={handleFieldChange}
        placeholder="username"
      />
    </div>

    <div className="auth-form__email signup-form__email">
      <label className="auth-form-label signup-form-label">Email:</label>
      {fieldErrors.email && <InlineError text={fieldErrors.email} />}
      <input
        type="email"
        name="email"
        value={formFields.email}
        className="auth-form-input signup-form-input"
        onChange={handleFieldChange}
        placeholder="email"
      />
    </div>

    <div className="auth-form__password signup-form__password">
      <label className="auth-form-label signup-form-label">Password:</label>
      {fieldErrors.password && <InlineError text={fieldErrors.password} />}
      <input
        type="password"
        name="password"
        value={formFields.password}
        className="auth-form-input signup-form-input"
        onChange={handleFieldChange}
        placeholder="password"
      />
    </div>

    <div className="auth-form__confirm-password signup-form__confirm-password">
      <label className="auth-form-label signup-form-label">
        Confirm Password:
      </label>
      {fieldErrors.confirmPassword && (
        <InlineError text={fieldErrors.confirmPassword} />
      )}
      <input
        type="password"
        name="confirmPassword"
        value={formFields.confirmPassword}
        className="auth-form-input signup-form-input"
        onChange={handleFieldChange}
        placeholder="confirm password"
      />
    </div>

    <Button
      text="Sign Up"
      cssClass="auth-form__btn signup-form__btn"
      handleClick={handleSignUp}
    />
  </form>
);

SignUpForm.propTypes = {
  formFields: PropTypes.object.isRequired,
  fieldErrors: PropTypes.object.isRequired,

  handleFieldChange: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired
};

export default SignUpForm;
