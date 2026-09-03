import "./App.css";
import ChatComponent from "./components/chat/chat.component";

function App() {
  return (
    <>
      <ChatComponent />
    </>
  );
}

export default App;

/**
 * Client: React: useState + useEffect
 * Server: JSON Server
 *
 * HTTP Short Polling: Client gửi request đến server mỗi khoảng thời gian nhất định để lấy dữ liệu mới.
 */
