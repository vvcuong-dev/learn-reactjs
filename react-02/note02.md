## Mục lục

1. [Refs và Hook useRef](#refs-va-hook-useref)

2. [Context API](#context-api)

3. [useReducer](#usereducer)

## Refs và Hook useRef

### Vấn đề

Trong data flow của React, props là cách để các parent components tương tác với các child components. Để updated child component, bạn cần re-render nó với các props mới. Tuy nhiên, có những trường hợp bạn muốn giữ một giá trị mà không cần re-render component. Đây là lúc mà `refs` và hook `useRef` trở nên hữu ích.

Nhưng sẽ có một số trường hợp cần bắt buộc phải updated các child component bên ngoài data flow của React. Ví dụ, bạn muốn focus vào một input field khi component được render, hoặc bạn muốn lưu trữ một giá trị mà không cần re-render component. Trong những trường hợp này, `refs` và hook `useRef` sẽ giúp bạn giải quyết vấn đề.

Các child component có thể là 1 instance của React Component hoặc có thể là DOM element.

### React Refs là gì?

React Ref (React reference) hiểu đơn giản là một đối tượng tham chiếu đến một biến, một component giữ cho giá trị của nó không thay đổi giữa các lần render và truy xuất các giá trị đó thông qua thuộc tính `current`. Refs có thể được sử dụng để truy cập trực tiếp vào DOM element hoặc React component instance.

## Context API trong React

Vấn đề: Trong react, thường thì bạn sẽ truyền dữ liệu từ một component cha đến một component con thông qua props. Nhưng việc truyền props có thể trở nên phức tạp và bất tiện khi bạn phải truyền chúng qua nhiều component ở giữa, hoặc khi nhiều component trong ứng dụng của bạn cần một thông tin. Context cho phép component cha làm cho một số thông tin trở nên có sẵn cho bất kỳ component tròng trong cây component dưới nó - bất kể component đó nằm sâu đến đâu trong cây component. Context giúp bạn tránh việc phải truyền props qua nhiều component trung gian.

### Vấn đề với việc truyền props:

- truyền props là một cách thông thường để truyền dữ liệu từ component cha xuống component con. Tuy nhiên, khi bạn cần truyền một props quá sâu từ component cha xuống con xuống cháu chẳng hạn, bạn sẽ phải truyền props qua nhiều component trung gian. Điều này có thể làm cho code trở nên khó đọc và khó bảo trì.

### Context API là gì?

- context là một tính năng của React cho phép một component cha cung cấp dữ liệu cho toàn bộ cây component bên dưới nó mà không cần phải truyền props qua từng component trung gian. Context API giúp bạn chia sẻ dữ liệu giữa các component mà không cần phải truyền props qua nhiều cấp độ.

### Sử dụng Context API

Để sử dụng Context API, bạn cần thực hiện các bước sau:

1. Tạo một Context bằng cách sử dụng `React.createContext()`. Điều này sẽ tạo ra một đối tượng Context mà bạn có thể sử dụng để cung cấp và tiêu thụ dữ liệu.
2. Sử dụng `Context.Provider` để cung cấp dữ liệu cho các component con. Bạn có thể đặt `Context.Provider` ở bất kỳ đâu trong cây component của bạn, và tất cả các component con bên dưới nó sẽ có thể truy cập dữ liệu được cung cấp.
3. Sử dụng `Context.Consumer` hoặc hook `useContext` để tiêu thụ dữ liệu từ Context trong các component con. `Context.Consumer` là một component mà bạn có thể sử dụng để truy cập dữ liệu từ Context, trong khi `useContext` là một hook mà bạn có thể sử dụng trong các functional component để truy cập dữ liệu từ Context.

### Các trường hợp sử dụng Context API

1. Đổi giao diện (theming): cho phép bạn thay đổi giao diện ứng dụng, ví dụ như chế độ ban đêm (dark mode)
2. Thông tin tài khoản hiện tại: cho phép bạn lưu trữ thông tin người dùng hiện tại và cung cấp nó cho các component khác trong ứng dụng.
3. Định tuyến (routing): cho phép bạn quản lý trạng thái định tuyến trong ứng dụng của bạn.
4. Quản lý state: Khi ứng dụng phức tạp và cần quản lý state phức tạp qua nhiều component, Context API có thể giúp bạn quản lý state một cách hiệu quả hơn.
5. Ngôn ngữ (localization): cho phép bạn lưu trữ thông tin ngôn ngữ hiện tại và cung cấp nó cho các component khác trong ứng dụng.

## useReducer

### Vấn đề

- Khi ứng dụng của bạn trở nên phức tạp, việc quản lý state có thể trở nên khó khăn. Bạn có thể cần phải quản lý nhiều state khác nhau và các action khác nhau để cập nhật state. Trong những trường hợp này, `useReducer` là một hook hữu ích để quản lý state phức tạp.

### useReducer là gì?

- `useReducer` là một hook trong React cho phép bạn quản lý state phức tạp bằng cách sử dụng một reducer function. Reducer function nhận vào state hiện tại và một action, và trả về state mới dựa trên action đó. `useReducer` cung cấp một cách tiếp cận rõ ràng và có cấu trúc hơn để quản lý state so với việc sử dụng nhiều `useState` hooks.

### Cách sử dụng useReducer

1. Định nghĩa một reducer function: Reducer function nhận vào hai tham số: state hiện tại và action. Nó sẽ trả về state mới dựa trên action đó.
2. Sử dụng hook `useReducer`: Bạn có thể sử dụng hook `useReducer` trong component của bạn để quản lý state. `useReducer` trả về một mảng gồm hai phần tử: state hiện tại và một hàm dispatch để gửi action đến reducer function.
3. Gửi action đến reducer function: Bạn có thể sử dụng hàm dispatch để gửi action đến reducer function. Action là một đối tượng mô tả loại hành động mà bạn muốn thực hiện để cập nhật state. Reducer function sẽ xử lý action và trả về state mới.
4. Cập nhật state dựa trên action: Khi reducer function trả về state mới, component của bạn sẽ được re-render với state mới đó. Bạn có thể sử dụng state mới trong component của bạn để hiển thị dữ liệu hoặc thực hiện các hành động khác.

### Các trường hợp sử dụng useReducer

1. Quản lý state phức tạp: Khi bạn có nhiều state khác nhau và các action khác nhau để cập nhật state, `useReducer` giúp bạn quản lý state một cách rõ ràng và có cấu trúc hơn.
2. Quản lý state dựa trên các action: Khi bạn muốn quản lý state dựa trên các action cụ thể, `useReducer` cung cấp một cách tiếp cận rõ ràng và có cấu trúc hơn để quản lý state so với việc sử dụng nhiều `useState` hooks.
3. Khi bạn muốn tách logic quản lý state ra khỏi component: `useReducer` cho phép bạn tách logic quản lý state ra khỏi component, giúp code của bạn trở nên dễ đọc và dễ bảo trì hơn. Bạn có thể định nghĩa reducer function ở một file riêng biệt và import nó vào component của bạn, giúp code của bạn trở nên rõ ràng và dễ bảo trì hơn.
