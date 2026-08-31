import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/style.css";
import { uid } from "../../ultis/uid.util";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoComponent() {
  const [todoList, setTodoList] = useState([]);
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const todo = {
      id: uid(),
      name: name,
      completed: false,
    };

    setTodoList([...todoList, todo]); // nghĩa là tạo ra một mảng mới, sao chép các phần tử từ todoList cũ và thêm phần tử todo mới vào cuối mảng
    setName("");
    toast.success("Thêm công việc thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false, // hiển thị thanh tiến trình
      closeOnClick: true, // cho phép đóng thông báo khi người dùng nhấp vào nó
      draggable: true, // cho phép người dùng kéo thông báo để di chuyển nó
      progress: undefined, // giá trị tiến trình hiện tại của thông báo (nếu có)
    });
  };

  return (
    <div className="todos">
      <div className="w-50 mx-auto mt-5">
        <h1 className="text-center">Danh sách công việc</h1>
        <div className="filter d-flex justify-content-between mt-3">
          <span className="active">All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <form action="" onSubmit={handleAdd}>
          <div className="input-group">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Nhập công việc..."
              value={name}
              onChange={handleChange}
            />
            <button className="btn btn-primary mt-3" type="submit">
              Thêm
            </button>
          </div>
        </form>

        <div className="todo-list">
          {todoList.length > 0 &&
            todoList.map(({ id, name, completed }) => (
              <div
                key={id}
                className={`todo-item d-flex justify-content-between align-items-center mt-3 ${completed ? "completed" : ""}`}
              >
                <input type="checkbox" />
                <span>{name}</span>
                <div>
                  <button className="btn btn-danger btn-sm">Xóa</button>
                </div>
              </div>
            ))}

          {todoList.length === 0 && (
            <p className="text-center mt-3 fst-italic">
              Không có công việc nào để hiển thị.
            </p>
          )}
          <button className="btn btn-danger mt-5 d-block mx-auto" type="button">
            Xóa tất cả
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TodoComponent;

/**
 * State:
 * - todoList --> lưu trữ danh sách công việc
 * - name --> lưu trữ tên công việc mới ở form input
 * - message --> thông báo
 * - filter --> lưu trữ trạng thái lọc công việc (all, active, completed)
 */
