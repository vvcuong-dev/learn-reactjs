1. Props

Mục đích: Props giúp truyền dữ liệu từ component cha sang component con trong React. Chúng cho phép bạn tùy chỉnh và tái sử dụng các component một cách linh hoạt.

Đặc điểm:

- Props là đối tượng (object) chứa các thuộc tính được truyền từ component cha.
- Props là read-only, nghĩa là bạn không thể thay đổi giá trị của chúng trong component con.
- Props có thể là bất kỳ kiểu dữ liệu nào: string, number, boolean, array, object, function, hoặc thậm chí là một component khác.
- Props được truyền vào component con thông qua cú pháp JSX, ví dụ: <ComponentName propName={value} />.

Lưu ý:

- Props không thể được thay đổi trong component con. Nếu bạn cần thay đổi dữ liệu, hãy sử dụng state hoặc callback function để thông báo cho component cha.
- Props có thể được sử dụng để truyền dữ liệu từ component cha đến component con, nhưng không thể truyền dữ liệu ngược lại. Nếu bạn cần truyền dữ liệu từ component con về component cha, hãy sử dụng callback function.

Kết luận: Props là một phần quan trọng trong React, giúp bạn xây dựng các component linh hoạt và tái sử dụng. Hiểu rõ cách sử dụng props sẽ giúp bạn phát triển ứng dụng React hiệu quả hơn.
