import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/style.css";

function TodoComponent() {
  return (
    <div class="todos">
      <div class="w-50 mx-auto mt-5">
        <h1 className="text-center">Danh sách công việc</h1>
        <div className="filter d-flex justify-content-between mt-3">
          <span className="active">All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <form action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Nhập công việc..."
            />
            <button className="btn btn-primary mt-3" type="submit">
              Thêm
            </button>
          </div>
        </form>

        <div className="todo-list">
          <div className="todo-item d-flex justify-content-between align-items-center mt-3">
            <input type="checkbox" />
            <span>Tên công việc</span>
            <div>
              <button className="btn btn-danger btn-sm">Xóa</button>
            </div>
          </div>
          <div className="todo-item d-flex justify-content-between align-items-center mt-3">
            <input type="checkbox" />
            <span>Tên công việc</span>
            <div>
              <button className="btn btn-danger btn-sm">Xóa</button>
            </div>
          </div>
          <button className="btn btn-danger mt-5 d-block mx-auto" type="button">
            Xóa tất cả
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoComponent;
