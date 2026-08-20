import React from "react";

const users = [
  {
    id: 1,
    name: "Nguyen Van A",
  },
  {
    id: 2,
    name: "Nguyen Van B",
  },
  {
    id: 3,
    name: "Nguyen Van C",
  },
];

export class Users extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };

    console.log("1. constructor");
  }

  componentDidMount = () => {
    console.log("3. componentDidMount");
    this.handleLoadUsers();
  };

  componentDidUpdate = () => {
    console.log("4. componentDidUpdate");
  };

  componentWillUnmount = () => {
    console.log("Kết thúc. componentWillUnmount");
  };

  handleLoadUsers = () => {
    this.setState({
      users: users,
    });
  };

  render() {
    const { users } = this.state;
    console.log("2. render");

    return (
      <>
        <h1>Vòng đời Component trong React</h1>
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
            </div>
          ))}
        </div>
        <button type="button" onClick={this.handleLoadUsers}>
          Load Data
        </button>
      </>
    );
  }
}

export default Users;

/**
 * Không được để setState trong phương thức render, vì sẽ gây ra vòng lặp vô hạn.
 *  -> vì khi setState được gọi, component sẽ re-render và gọi lại phương thức render, xong lại setState, cứ thế lặp lại.
 *  -> Nếu muốn setState khi component được render, có thể sử dụng phương thức componentDidMount hoặc componentDidUpdate.
 *  -> Hoặc sử dụng useEffect hook nếu là functional component.
 */

/**
 * 1. constructor: được gọi khi component được khởi tạo, thường dùng để khởi tạo state.
 *
 * 2. render: được gọi khi component được render, trả về JSX để hiển thị trên giao diện. (state hoặc props thay đổi sẽ gọi lại render)
 *
 * 3. componentDidMount: được gọi sau khi component được render lần đầu tiên, thường dùng để gọi API hoặc setState.
 *
 * 4. componentDidUpdate: được gọi sau khi component được cập nhật, thường dùng để gọi API hoặc setState. Có 2 tham số prevProps (props trước đó) và prevState (state trước đó) để so sánh với props và state hiện tại.
 *
 * 5. componentWillUnmount: được gọi trước khi component bị hủy, thường dùng để dọn dẹp (cleanup) các tài nguyên như event listener, timer, v.v.
 *
 * Lưu ý:
 * số 3 và 4 dường như khá giống nhau, nhưng componentDidMount chỉ được gọi một lần khi component được render lần đầu tiên,
 * còn componentDidUpdate được gọi mỗi khi component được cập nhật (state hoặc props thay đổi).
 */
