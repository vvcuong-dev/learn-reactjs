# Redux

Redux là thư viện quản lý global state cho ứng dụng React (và cả các framework khác nữa), giúp giải quyết vấn đề khi state cần được chia sẻ giữa nhiều component mà không nằm trong cùng một cây cha-con trực tiếp.

Vài ý chính về Redux:

State tập trung: Toàn bộ state của app được lưu trong một "store" duy nhất, thay vì rải rác ở nhiều component.
Không mutate trực tiếp: Muốn thay đổi state phải dispatch một action, rồi reducer sẽ xử lý và trả về state mới (immutable).
Một chiều dữ liệu (unidirectional data flow): Action → Reducer → Store → UI, giúp dễ debug và dự đoán hành vi của app hơn.
Tránh prop drilling: Không cần truyền props qua nhiều tầng component chỉ để lấy được một giá trị state.

- Redux Core --> mất thời gian, chỉ sử dụng khi học tập
- Redux Toolkit --> thư viện chính thức của Redux, giúp viết code ngắn gọn hơn, dễ bảo trì hơn, và có sẵn nhiều tính năng hữu ích (như createSlice, configureStore, createAsyncThunk,...). Đây là cách khuyến nghị để sử dụng Redux trong các dự án thực tế.
- Redux middleware --> là các hàm trung gian giúp mở rộng khả năng của Redux, ví dụ như xử lý async action, logging, routing,... Một số middleware phổ biến: redux-thunk, redux-saga, redux-logger,...

## Thư viện sử dụng

- Redux Toolkit: `@reduxjs/toolkit`
- React-Redux: `react-redux` (kết nối React với Redux store)
- Redux thunk: `redux-thunk` (middleware để xử lý async action)
- redux saga: `redux-saga` (middleware để xử lý side effects, async action)

## React-Redux

Component: Provider
Hook: useDispatch, useSelector

## Các thành phần

- Store: Nơi lưu trữ toàn bộ state của ứng dụng. Chỉ có một store duy nhất trong app.
- State: Dữ liệu hiện tại của ứng dụng, được lưu trong store.
- Action: Là một object mô tả một sự kiện muốn xảy ra trong ứng dụng.
- Reducer: Là một hàm nhận state hiện tại và action, trả về state mới
- Selector: dùng để đọc (lấy) dữ liệu từ Redux store vào trong component.
- Dispatch: dùng để gửi action nhằm thay đổi state.

- Action Creater: là một hàm trong Redux dùng để tạo ra (return) một action object. thay vì bạn phải tự viết tay object đó mỗi lần.

Action là gì?

- Action là object mô tả "chuyện gì vừa xảy ra", bắt buộc có field "type": { type: "todo/addTodo", payload: "Học React Hook Form" }

Action Creator:

- thay vì viết tay object trên mỗi lần dispatch, bạn viết một hàm trả về nó:

// action creator
function addTodo(text) {
return {
type: "todo/addTodo",
payload: text,
};
}

// dùng
dispatch(addTodo("Học React Hook Form"));

Lợi ích:

- Không lặp code, không gõ sai type (typo).
- Tập trung logic tạo action ở một chỗ, dễ maintain.
- Có thể xử lý thêm logic trước khi trả action (ví dụ sinh id, timestamp...).

# Redux Middleware

- là một lớp trung gian nằm giữa lúc bạn dispatch(action) và lúc action đó thực sự đến được reducer. Nó cho phép bạn chặn acion lại để làm gì đó trước khi (hoặc thay vì) để nó đi tiếp.

Luồng khi có middleware: dispatch(action) → Middleware 1 → Middleware 2 → ... → Reducer → Store cập nhật

=> không có middleware, action đi thẳng từ dispatch vào reducer. Có middleware, nó phải đi qua các middleware trước khi đến reducer.

- Dùng để làm gì?
  - Xử lý bất đồng bộ (async): gọi API, sau đó mới dispatch ation thật (Redux Toolkit dùng redux-thunk, redux-saga,...)
  - Logging: ghi log action, state trước và sau khi reducer xử lý.
  - Xử lý lỗi tập trung: gửi lỗi lên hệ thống theo dõi
  - Chặn action: ví dụ kiểm tra quyền trước khi cho phép action đi tiếp.

Component (UI) ==> dispatch(action) → Middleware 1 → Middleware 2 → ... → Reducer → Store cập nhật
