import "bootstrap/dist/css/bootstrap.min.css";
import MessageComponent from "./message.component";
import InputComponent from "./input.component";

function ChatComponent() {
  return (
    <div className="w-50 mx-auto">
      <h2>Chat box</h2>
      <MessageComponent />
      <InputComponent />
    </div>
  );
}

export default ChatComponent;
