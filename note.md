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
- Sử dụng callback function khi cập nhật state dựa trên giá trị hiện tại của state. Điều này giúp tránh các vấn đề liên quan đến việc cập nhật state không đồng bộ. nhớ có prevState (giá trị state trước khi cập nhật) khi sử dụng setState trong class component hoặc callback function trong useState hook.

Kết luận: State là một phần quan trọng trong React, giúp bạn quản lý dữ liệu động và làm cho giao diện người dùng phản ứng với các thay đổi đó. Hiểu rõ cách sử dụng state sẽ giúp bạn xây dựng các ứng dụng React linh hoạt và tương tác hơn.

4. Vòng đời Component trong React

Mục đích: Vòng đời component trong React giúp bạn quản lý các giai đoạn khác nhau của một component, từ khi nó được tạo ra, cập nhật, cho đến khi nó bị hủy. Điều này cho phép bạn thực hiện các hành động cụ thể tại các thời điểm khác nhau trong vòng đời của component.

Đặc điểm:

- Vòng đời component trong React được chia thành ba giai đoạn chính: Mounting (gắn kết), Updating (cập nhật), và Unmounting (hủy bỏ).
- Trong class component, bạn có thể sử dụng các phương thức vòng đời như componentDidMount, componentDidUpdate, và componentWillUnmount để thực hiện các hành động tại các giai đoạn khác nhau.
- Trong functional component, bạn có thể sử dụng hook useEffect để thực hiện các hành động tương tự. useEffect có thể được cấu hình để chạy sau khi component được render, sau khi state hoặc props thay đổi, hoặc trước khi component bị hủy.
- Lưu ý:
- Khi sử dụng useEffect, bạn có thể truyền vào một mảng phụ thuộc (dependency array) để xác định khi nào effect sẽ được chạy lại. Nếu mảng phụ thuộc rỗng, effect sẽ chỉ chạy một lần sau khi component được render lần đầu. Nếu bạn truyền vào các giá trị trong mảng phụ thuộc, effect sẽ chạy lại mỗi khi các giá trị đó thay đổi.
- Hãy cẩn thận khi sử dụng useEffect để tránh các vấn đề về hiệu suất và vòng lặp vô hạn. Đảm bảo rằng bạn chỉ thực hiện các hành động cần thiết trong effect và dọn dẹp (cleanup) các tài nguyên khi component bị hủy.
- Kết luận: Hiểu rõ vòng đời component trong React sẽ giúp bạn quản lý các giai đoạn khác nhau của một component một cách hiệu quả, từ đó xây dựng các ứng dụng React linh hoạt và tối ưu hơn.

# Mouting (Gắn kết)

- Mục đích: Giai đoạn Mounting trong vòng đời component của React là quá trình khi một component được tạo ra và gắn kết vào cây DOM. Trong giai đoạn này, bạn có thể thực hiện các hành động như khởi tạo state, thiết lập các tài nguyên cần thiết, hoặc thực hiện các thao tác DOM.

Đặc điểm:

- Giai đoạn Mounting bao gồm các phương thức vòng đời sau trong class component: constructor, static getDerivedStateFromProps, render, và componentDidMount.
- Trong functional component, bạn có thể sử dụng hook useEffect với mảng phụ thuộc rỗng để thực hiện các hành động sau khi component được render lần đầu.
- Lưu ý:
- Trong giai đoạn Mounting, bạn nên tránh thực hiện các thao tác DOM trực tiếp trong constructor hoặc render. Thay vào đó, hãy sử dụng componentDidMount hoặc useEffect để thực hiện các thao tác DOM sau khi component đã được gắn kết vào cây DOM.
- Khi sử dụng useEffect trong functional component, hãy đảm bảo rằng bạn chỉ thực hiện các hành động cần thiết và dọn dẹp các tài nguyên khi component bị hủy để tránh rò rò bộ nhớ và các vấn đề về hiệu suất.
- Kết luận: Giai đoạn Mounting là một phần quan trọng trong vòng đời component của React, giúp bạn quản lý các hành động cần thiết khi một component được tạo ra và gắn kết vào cây DOM. Hiểu rõ giai đoạn này sẽ giúp bạn xây dựng các ứng dụng React hiệu quả và tối ưu hơn.

# Updating (Cập nhật)

- Mục đích: Giai đoạn Updating trong vòng đời component của React là quá trình khi một component được cập nhật do thay đổi state hoặc props. Trong giai đoạn này, bạn có thể thực hiện các hành động như kiểm tra các giá trị mới, cập nhật giao diện người dùng, hoặc thực hiện các thao tác DOM dựa trên các thay đổi đó.

Đặc điểm:

- Giai đoạn Updating bao gồm các phương thức vòng đời sau trong class component: static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, và componentDidUpdate.
- Trong functional component, bạn có thể sử dụng hook useEffect với mảng phụ thuộc chứa các giá trị state hoặc props mà bạn muốn theo dõi để thực hiện các hành động khi chúng thay đổi.
- Lưu ý:
- Trong giai đoạn Updating, bạn nên tránh thực hiện các thao tác DOM trực tiếp trong render. Thay vào đó, hãy sử dụng componentDidUpdate hoặc useEffect để thực hiện các thao tác DOM sau khi component đã được cập nhật.
- Khi sử dụng useEffect trong functional component, hãy đảm bảo rằng bạn chỉ thực hiện các hành động cần thiết và dọn dẹp các tài nguyên khi component bị hủy để tránh rò rò bộ nhớ và các vấn đề về hiệu suất.
- Kết luận: Giai đoạn Updating là một phần quan trọng trong vòng đời component của React, giúp bạn quản lý các hành động cần thiết khi một component được cập nhật do thay đổi state hoặc props. Hiểu rõ giai đoạn này sẽ giúp bạn xây dựng các ứng dụng React hiệu quả và tối ưu hơn.

# Unmounting (Hủy bỏ)

- Mục đích: Giai đoạn Unmounting trong vòng đời component của React là quá trình khi một component bị hủy bỏ và gỡ khỏi cây DOM. Trong giai đoạn này, bạn có thể thực hiện các hành động như dọn dẹp tài nguyên, hủy các sự kiện, hoặc lưu trữ dữ liệu trước khi component bị hủy.

Đặc điểm:

- Giai đoạn Unmounting bao gồm phương thức vòng đời componentWillUnmount trong class component.
- Trong functional component, bạn có thể sử dụng hook useEffect với một hàm dọn dẹp (cleanup function) để thực hiện các hành động trước khi component bị hủy.
- Lưu ý:
- Trong giai đoạn Unmounting, bạn nên đảm bảo rằng bạn dọn dẹp tất cả các tài nguyên, hủy các sự kiện, và lưu trữ dữ liệu cần thiết trước khi component bị hủy để tránh rò rò bộ nhớ và các vấn đề về hiệu suất.
- Khi sử dụng useEffect trong functional component, hãy đảm bảo rằng bạn chỉ thực hiện các hành động cần thiết trong hàm dọn dẹp và tránh thực hiện các thao tác DOM trực tiếp trong hàm dọn dẹp để đảm bảo rằng component được hủy bỏ một cách an toàn và hiệu quả.
- Kết luận: Giai đoạn Unmounting là một phần quan trọng trong vòng đời component của React, giúp bạn quản lý các hành động cần thiết khi một component bị hủy bỏ và gỡ khỏi cây DOM. Hiểu rõ giai đoạn này sẽ giúp bạn xây dựng các ứng dụng React hiệu quả và tối ưu hơn, đồng thời tránh các vấn đề về rò rò bộ nhớ và hiệu suất.

# constructor(props) - Mounting

- được gọi khi một thể hiện của component được tạo ra. Nó thường được sử dụng để khởi tạo state và bind các phương thức của component.
- Có thể dùng để nhận props từ component cha và thiết lập state ban đầu dựa trên các giá trị đó.
- Nếu phải cài đặt hàm này thì khai báo nó với từ khóa constructor(props) và gọi super(props) để đảm bảo rằng component được khởi tạo đúng cách.
- Nếu không làm gì trong constructor, bạn có thể bỏ qua việc khai báo nó và React sẽ tự động tạo ra một constructor mặc định.

# componentWillMount() - Mounting

- được gọi trước khi component được render lần đầu tiên. Tuy nhiên, phương thức này đã bị loại bỏ trong React 16 và không nên sử dụng nữa.
- dùng để đăng ký các sự kiện hoặc thực hiện các thao tác chuẩn bị trước khi component được render.
- Dựa vào các props để tính toán và thiết lập state ban đầu cho component.
- Tuy nhiên, vì nó đã bị loại bỏ, bạn nên sử dụng componentDidMount() hoặc useEffect() trong functional component để thực hiện các thao tác này.

# render() - Mounting và Updating

- hàm này bắt buộc phải có trong class component và được gọi để render giao diện người dùng của component. Nó trả về một cây JSX hoặc React elements.
- Trong functional component, bạn không cần định nghĩa hàm render() vì toàn bộ hàm component chính là hàm render. Bạn chỉ cần trả về JSX từ hàm component.
- render() được gọi mỗi khi state hoặc props của component thay đổi, và React sẽ tự động cập nhật giao diện người dùng dựa trên các thay đổi đó.
- Trong render(), bạn nên tránh thực hiện các thao tác DOM trực tiếp hoặc các tác vụ tốn thời gian, vì điều này có thể làm giảm hiệu suất của ứng dụng. Thay vào đó, hãy sử dụng các phương thức vòng đời khác như componentDidMount() hoặc useEffect() để thực hiện các thao tác này sau khi component đã được render.

# componentDidMount() - Mounting

- được gọi ngay sau khi component được render lần đầu tiên và gắn kết vào cây DOM. Đây là nơi lý tưởng để thực hiện các thao tác như gọi API, đăng ký sự kiện, hoặc thiết lập các tài nguyên cần thiết cho component.
- Sau khi fetch dữ liệu từ API hoặc thực hiện các thao tác bất đồng bộ, bạn có thể tương tác với DOM bằng JS hoặc cập nhật state để render lại component với dữ liệu mới.
- Trong functional component, bạn có thể sử dụng hook useEffect với mảng phụ thuộc rỗng để thực hiện các thao tác này sau khi component được render lần đầu tiên.
- componentDidMount() chỉ được gọi một lần trong vòng đời của component, vì vậy bạn có thể yên tâm rằng các thao tác trong phương thức này sẽ chỉ được thực hiện một lần khi component được tạo ra và gắn kết vào cây DOM. Điều này giúp tránh việc thực hiện các thao tác không cần thiết nhiều lần và cải thiện hiệu suất của ứng dụng.

# ComponentWillReceiveProps(nextProps) - Updating

- hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi. Phải gọi setState để cập nhật state mới dựa trên props mới. Tuy nhiên, phương thức này đã bị loại bỏ trong React 16 và không nên sử dụng nữa.

# shouldComponentUpdate(nextProps, nextState) - Updating

- được gọi trước khi render() để xác định xem component có cần render lại hay không. Nó nhận vào nextProps và nextState, và trả về true hoặc false. Nếu trả về false, component sẽ không render lại, giúp tối ưu hiệu suất.

# componentWillUpdate(nextProps, nextState) - Updating

- Được gọi ngay sau shouldComponentUpdate() nếu hàm này trả về true. Không gọi setState trong hàm này bởi hàm này là để chuẩn bị update cho đối tượng chứ không phải tạo ra 1 update mới, sẽ tạo ra vòng lặp vô hạn. Phương thức này đã bị loại bỏ trong React 16 và không nên sử dụng nữa.

# componentDidUpdate(prevProps, prevState, snapshot) - Updating

- được gọi ngay sau render() từ lần render thứ hai trở đi (nghĩa là sau khi component đã được cập nhật). Đây là nơi lý tưởng để thực hiện các thao tác dựa trên props hoặc state mới, như cập nhật DOM hoặc gọi API. Bạn có thể so sánh prevProps và prevState với props và state hiện tại để xác định xem có cần thực hiện các hành động nào không.

# componentWillUnmount() - Unmounting

- được gọi ngay trước khi component bị hủy bỏ và gỡ khỏi cây DOM. Đây là nơi lý tưởng để dọn dẹp các tài nguyên, hủy các sự kiện, hoặc lưu trữ dữ liệu cần thiết trước khi component bị hủy. Bạn nên đảm bảo rằng bạn dọn dẹp tất cả các tài nguyên và hủy các sự kiện để tránh rò rò bộ nhớ và các vấn đề về hiệu suất.

5. React Hooks

Mục đích: React Hooks là các hàm đặc biệt được giới thiệu trong React 16.8, cho phép bạn sử dụng state và các tính năng khác của React mà không cần viết class component. Hooks giúp bạn viết code ngắn gọn, dễ đọc và dễ bảo trì hơn.

Đặc điểm:

- Hooks chỉ có thể được sử dụng trong functional component hoặc custom hook. Bạn không thể sử dụng hooks trong class component hoặc các hàm thông thường.
- React cung cấp một số hooks cơ bản như useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, v.v. Mỗi hook có một mục đích và cách sử dụng riêng, giúp bạn quản lý state, side effects, context, và các tính năng khác của React một cách hiệu quả.
- Hooks cho phép bạn tách logic liên quan đến state và side effects ra khỏi component, giúp code trở nên dễ đọc và dễ bảo trì hơn. Bạn có thể tạo custom hook để tái sử dụng logic giữa các component khác nhau

Lưu ý: React Hooks có một số quy tắc quan trọng mà bạn cần tuân thủ:

- Hooks chỉ có thể được gọi ở cấp độ trên cùng của component hoặc custom hook. Bạn không thể gọi hooks trong vòng lặp, điều kiện, hoặc các hàm lồng nhau.
- Hooks phải được gọi theo cùng một thứ tự trong mỗi lần render. Điều này giúp React theo dõi state và side effects một cách chính xác. Nếu bạn thay đổi thứ tự gọi hooks, React sẽ không thể xác định được state và side effects đúng cách, dẫn đến lỗi hoặc hành vi không mong muốn.
- Bạn có thể tạo custom hook để tái sử dụng logic giữa các component khác nhau. Custom hook là một hàm JavaScript bắt đầu bằng từ "use" và có thể sử dụng các hooks khác bên trong nó. Custom hook giúp bạn tách logic liên quan đến state và side effects ra khỏi component, làm cho code trở nên dễ đọc và dễ bảo trì hơn.
