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
    console.log("Form submitted:", { name, email });
  };

  render() {
    return (
      <>
        <h1 className="container">
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
                  />
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
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </h1>
      </>
    );
  }
}

export default Form;
