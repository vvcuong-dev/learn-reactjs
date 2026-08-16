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

3. State trong React

Mục đích: State trong React giúp bạn quản lý dữ liệu động trong component. Nó cho phép bạn lưu trữ và cập nhật dữ liệu mà có thể thay đổi theo thời gian, từ đó làm cho giao diện người dùng phản ứng với các thay đổi đó.

Đặc điểm:

- State là một đối tượng (object) chứa các thuộc tính đại diện cho dữ liệu động của component.
- State có thể được thay đổi thông qua phương thức setState (trong class component) hoặc hook useState (trong functional component).
- Khi state thay đổi, React sẽ tự động render lại component để phản ánh các thay đổi đó trên giao diện người dùng.
- State chỉ tồn tại trong component mà nó được định nghĩa, và không thể được truy cập trực tiếp từ các component khác. Nếu bạn cần chia sẻ state giữa các component, hãy sử dụng props hoặc các giải pháp quản lý state như Context API hoặc Redux.

Lưu ý:

- State không nên được thay đổi trực tiếp. Thay vào đó, hãy sử dụng setState hoặc hook useState để cập nhật state. Việc thay đổi state trực tiếp có thể dẫn đến các vấn đề về hiệu suất và không đảm bảo rằng React sẽ render lại component đúng cách.

Kết luận: State là một phần quan trọng trong React, giúp bạn quản lý dữ liệu động và làm cho giao diện người dùng phản ứng với các thay đổi đó. Hiểu rõ cách sử dụng state sẽ giúp bạn xây dựng các ứng dụng React linh hoạt và tương tác hơn.
