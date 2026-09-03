import { useState } from "react";
import config from "../../config.json";

const { SERVER_API } = config;

export default function InputComponent() {
  const [form, setForm] = useState({
    user: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, text } = form;
    if (!user || !text) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    sendMessage();
  };

  const sendMessage = async () => {
    const response = await fetch(`${SERVER_API}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      setForm({ ...form, text: "" });
    } else {
      alert("Gửi tin nhắn thất bại!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="user"
          value={form.user}
          placeholder="Nhập tên..."
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="text"
          value={form.text}
          placeholder="Nhập tin nhắn..."
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Gửi
        </button>
      </div>
    </form>
  );
}
