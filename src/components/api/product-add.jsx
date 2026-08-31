import React from "react";
import config from "../../config.json";
const { SERVER_API } = config;

export class productAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        price: 0,
      },
    };
  }

  handleChange = (event) => {
    const data = { ...this.state.form };
    data[event.target.name] = event.target.value; // data[event.target.name] = event.target.value; // data["name"] = "value"
    this.setState({ form: data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price } = this.state.form;
    this.postProduct({ name, price });
  };

  postProduct = async (data) => {
    const response = await fetch(`${SERVER_API}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      this.props.onSuccess(true);
      this.setState({
        form: {
          name: "",
          price: 0,
        },
      });
    }
  };

  render() {
    const { name, price } = this.state.form;

    return (
      <div>
        <h2>Tạo sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name">Tên sản phẩm:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="price">Giá sản phẩm:</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={this.handleChange}
              value={price}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Tạo sản phẩm
          </button>
        </form>
      </div>
    );
  }
}

export default productAdd;

/**
 * Ý nghĩa của handleChange và handleSubmit trong component ProductAdd:
 *
 *  - handleChange: Đây là một hàm xử lý sự kiện khi người dùng thay đổi giá trị trong các trường input của form. Khi người dùng nhập dữ liệu vào
 *    các trường input (tên sản phẩm và giá sản phẩm),
 *    hàm này sẽ được gọi và cập nhật trạng thái (state) của component với giá trị mới.
 *    Cụ thể, nó sao chép trạng thái hiện tại của form, sau đó cập nhật giá trị của trường tương ứng dựa trên tên của input (name hoặc price) và
 *    cuối cùng cập nhật lại state với dữ liệu mới.
 *
 *  - handleSubmit: Đây là một hàm xử lý sự kiện khi người dùng gửi form (nhấn nút "Tạo sản phẩm").
 *    Hàm này sẽ ngăn chặn hành vi mặc định của form (tải lại trang) và lấy dữ liệu từ state (tên và giá sản phẩm) để gửi yêu cầu POST đến API để tạo sản phẩm mới.
 *    Nếu yêu cầu thành công, nó sẽ gọi hàm onSuccess được truyền từ component cha để thông báo rằng sản phẩm đã được tạo thành công và reset lại form về trạng thái ban đầu.
 */
