import { useState, useEffect } from "react";
import config from "../../config.json";

const { SERVER_API } = config;

export default function InputComponent() {
  const [form, setForm] = useState({
    user: "",
    text: "",
  });

  // Khi mount: nếu localStorage có tên user đã lưu, điền sẵn vào form.user
  useEffect(() => {
    const savedUser = localStorage.getItem("chat_user");
    if (savedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm((prevForm) => ({ ...prevForm, user: savedUser }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const sendMessage = async () => {
    try {
      const response = await fetch(`${SERVER_API}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setForm((prevForm) => ({ ...prevForm, text: "" }));
      } else {
        alert("Gửi tin nhắn thất bại!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gửi tin nhắn thất bại!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, text } = form;
    if (!user || !text) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    localStorage.setItem("chat_user", user);
    sendMessage();
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
