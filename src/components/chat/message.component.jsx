import { useState, useEffect } from "react";
import config from "../../config.json";

const { SERVER_API } = config;

function MessageComponent() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await fetch(`${SERVER_API}/messages`);
    const data = await response.json(); // response.json() luôn tạo ra một object/array MỚI trong bộ nhớ nên useEffect sẽ được gọi lại
    setMessages(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getMessages();
    }, 1000);
  }, [messages]);

  // deps = [messages] => mỗi khi messages thay đổi thì callback sẽ được gọi lại
  // deps = [] => chỉ chạy 1 lần sau khi component mount

  return (
    <div
      className="messages border border-dark p-2"
      style={{ height: "300px", overflowY: "auto" }}
    >
      {messages.map((message) => (
        <div key={message.id} className="mb-3 bg-secondary text-white p-2">
          <div className="d-flex justify-content-between">
            <span style={{ fontWeight: "bold" }}>{message.user}</span>
            <p>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageComponent;
