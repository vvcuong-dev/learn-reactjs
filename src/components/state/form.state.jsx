import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Validate from "./validate";

const validate = new Validate();

export class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      form: {
        email: "",
        password: "",
      },
      errors: {},
    };
  }

  handleChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  handleSubmitForm = (e) => {
    e.preventDefault();

    const rules = {
      email: "required|email",
      password: "required|min:6",
    };

    const messages = {
      "email.required": "Email is required",
      "email.email": "Email is invalid",
      "password.required": "Password is required",
      "password.min": "Password must be at least 6 characters",
    };

    const isValid = validate.run(this.state.form, rules, messages);

    this.setState({ errors: validate.errors });

    if (isValid) {
      console.log("Form submitted:", this.state.form);
    }
  };

  render() {
    const { form, errors } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmitForm}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={this.handleChangeValue}
                  value={form.email}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={this.handleChangeValue}
                  value={form.password}
                />
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
