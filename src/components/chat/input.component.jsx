export default function InputComponent() {
  return (
    <form className="mt-3">
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Nhập tên..." />
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập tin nhắn..."
        />
        <button className="btn btn-primary" type="submit">
          Gửi
        </button>
      </div>
    </form>
  );
}
