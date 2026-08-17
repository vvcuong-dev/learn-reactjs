import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      form: {
        name: "",
        email: "",
      },
      errors: {},
    };
  }

  handleChangeValue = (e) => {
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        ...data, // nghĩa là data sẽ ghi đè lên các giá trị cũ trong prevState.form nếu có cùng key, còn nếu không có thì sẽ thêm mới key-value vào prevState.form
      },
    }));
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { name, email } = this.state.form;

    const errors = {};

    if (!name) {
      errors.form = "Please fill in the name field.";
    }

    if (!email) {
      errors.email = "Please fill in the email field.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    this.setState({ errors: errors });

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", { name, email });

      this.setState({
        form: {
          name: "",
          email: "",
        },
      });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={this.handleSubmitForm}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    onChange={this.handleChangeValue}
                    value={this.state.form.name}
                  />
                  {errors.form && (
                    <div className="text-danger">{errors.form}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={this.handleChangeValue}
                    value={this.state.form.email}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
