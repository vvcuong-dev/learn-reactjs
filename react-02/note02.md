## Mục lục

1. [Refs và Hook useRef](#refs-va-hook-useref)

## Refs và Hook useRef

### Vấn đề

Trong data flow của React, props là cách để các parent components tương tác với các child components. Để updated child component, bạn cần re-render nó với các props mới. Tuy nhiên, có những trường hợp bạn muốn giữ một giá trị mà không cần re-render component. Đây là lúc mà `refs` và hook `useRef` trở nên hữu ích.

Nhưng sẽ có một số trường hợp cần bắt buộc phải updated các child component bên ngoài data flow của React. Ví dụ, bạn muốn focus vào một input field khi component được render, hoặc bạn muốn lưu trữ một giá trị mà không cần re-render component. Trong những trường hợp này, `refs` và hook `useRef` sẽ giúp bạn giải quyết vấn đề.

Các child component có thể là 1 instance của React Component hoặc có thể là DOM element.

### React Refs là gì?

React Ref (React reference) hiểu đơn giản là một đối tượng tham chiếu đến một biến, một component giữ cho giá trị của nó không thay đổi giữa các lần render và truy xuất các giá trị đó thông qua thuộc tính `current`. Refs có thể được sử dụng để truy cập trực tiếp vào DOM element hoặc React component instance.
