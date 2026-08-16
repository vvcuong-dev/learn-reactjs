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

2. Sự kiện trong React

Mục đích: Sự kiện trong React giúp bạn xử lý các hành động của người dùng, như click, submit, change, v.v. Chúng cho phép bạn tương tác với giao diện người dùng và thực hiện các hành động dựa trên các sự kiện đó.

Đặc điểm:

- Sự kiện trong React được đặt tên theo camelCase, ví dụ: onClick, onChange, onSubmit.
- Sự kiện trong React sử dụng các hàm callback để xử lý các hành động của người dùng. Bạn có thể định nghĩa các hàm này trong component và truyền chúng vào các sự kiện thông qua props.
- Sự kiện trong React có thể được gắn vào các phần tử HTML hoặc các component React. Ví dụ: <button onClick={handleClick}>Click me</button>.

Lưu ý:

- Khi xử lý sự kiện trong React, bạn cần đảm bảo rằng các hàm callback được bind đúng ngữ cảnh (context) nếu bạn sử dụng class component. Trong functional component, bạn có thể sử dụng arrow function để giữ ngữ cảnh.
- Bạn có thể truyền dữ liệu từ sự kiện về component cha thông qua callback function. Ví dụ, bạn có thể truyền một hàm từ component cha vào component con và gọi hàm đó khi sự kiện xảy ra trong component con.

Kết luận: Sự kiện trong React là một phần quan trọng giúp bạn tương tác với người dùng và thực hiện các hành động dựa trên các sự kiện đó. Hiểu rõ cách sử dụng sự kiện sẽ giúp bạn xây dựng các ứng dụng React tương tác và linh hoạt hơn.
