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
