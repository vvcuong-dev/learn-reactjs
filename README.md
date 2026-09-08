## Mục lục

1. [useImperativeHandle](#useimperativehandle)

2. [useLayoutEffect](#uselayouteffect)

3. [React.memo, useMemo, useCallback](#reactmemo-usememo-usecallback)

4. [useId](#useid)

5. [useDeferredValue](#usedeferredvalue)

## useImperativeHandle

### Vấn đề

- Trong React, các component con thường không thể trực tiếp thay đổi state của component cha. Tuy nhiên, có những trường hợp bạn muốn component con có thể gọi một hàm hoặc thay đổi state của component cha. Đây là lúc mà hook `useImperativeHandle` trở nên hữu ích.

#### useImperativeHandle là gì?

- `useImperativeHandle` là một hook trong React cho phép bạn tùy chỉnh giá trị mà một component con trả về khi được tham chiếu bằng `ref`. Thông thường, khi bạn sử dụng `ref` để tham chiếu đến một component con, bạn sẽ nhận được một đối tượng tham chiếu đến instance của component đó. Tuy nhiên, với `useImperativeHandle`, bạn có thể kiểm soát những gì được trả về từ component con khi được tham chiếu bằng `ref`.

### Cách sử dụng useImperativeHandle

- Để sử dụng `useImperativeHandle`, bạn cần thực hiện các bước sau:
  B1: Tạo một component con và sử dụng `forwardRef` để cho phép component cha có thể tham chiếu đến component con.
  B2: Trong component con, sử dụng `useImperativeHandle` để tùy chỉnh giá trị mà component con trả về khi được tham chiếu bằng `ref`. Bạn có thể trả về một đối tượng chứa các hàm hoặc giá trị mà bạn muốn component cha có thể truy cập.
  B3: Trong component cha, sử dụng `ref` để tham chiếu đến component con và gọi các hàm hoặc truy cập các giá trị mà bạn đã tùy chỉnh trong `useImperativeHandle`.

## useLayoutEffect

### Vấn đề

- Trong React, hook `useEffect` được sử dụng để thực hiện các tác vụ phụ thuộc vào state hoặc props. Tuy nhiên, có những trường hợp bạn muốn thực hiện các tác vụ đồng bộ trước khi DOM được cập nhật. Đây là lúc mà hook `useLayoutEffect` trở nên hữu ích.

### useLayoutEffect là gì?

- `useLayoutEffect` là một hook trong React cho phép bạn thực hiện các tác vụ đồng bộ trước khi DOM được cập nhật. Nó hoạt động tương tự như `useEffect`, nhưng được gọi ngay sau khi tất cả các thay đổi DOM đã được thực hiện (nghĩa là sau khi DOM được cập nhật, chạy sau `useEffect`), nhưng trước khi trình duyệt vẽ lại màn hình. Điều này có nghĩa là bạn có thể thực hiện các tác vụ đồng bộ như đo lường kích thước của phần tử hoặc thay đổi layout trước khi người dùng nhìn thấy bất kỳ thay đổi nào trên màn hình.

- Thường hay sử dụng cho:

1.  Đo lường kích thước của phần tử DOM trước khi render.
2.  Thực hiện các thay đổi layout trước khi trình duyệt vẽ lại màn hình.
3.  Thực hiện các tác vụ đồng bộ mà bạn muốn đảm bảo rằng chúng được thực hiện trước khi người dùng nhìn thấy bất kỳ thay đổi nào trên màn hình.

### Cách sử dụng useLayoutEffect

- Để sử dụng `useLayoutEffect`, bạn cần thực hiện các bước sau:
  B1: Import `useLayoutEffect` từ React.
  B2: Sử dụng `useLayoutEffect` trong component của bạn để thực hiện các tác vụ đồng bộ trước khi DOM được cập nhật. Bạn có thể truyền vào một hàm callback và một mảng phụ thuộc (dependency array) để xác định khi nào hook này sẽ được gọi lại.

## React.memo, useMemo, useCallback

### Vấn đề

- Trong React, khi một component được render lại, tất cả các hàm và giá trị trong component đó sẽ được tạo lại. Điều này có thể dẫn đến việc render lại không cần thiết của các component con, gây ảnh hưởng đến hiệu suất của ứng dụng. Để tối ưu hóa hiệu suất, React cung cấp các hook như `React.memo`, `useMemo`, và `useCallback` để tránh việc render lại không cần thiết.

### React.memo là gì?

- `React.memo` là một Higher Order Component (HOC) trong React được sử dụng để tối ưu hóa hiệu suất của các component chức năng (functional components). Khi bạn bọc một component bằng `React.memo`, React sẽ ghi nhớ kết quả render của component đó và chỉ render lại khi props của component thay đổi. Nếu props không thay đổi, React sẽ sử dụng kết quả render đã lưu trữ trước đó, giúp tránh việc render lại không cần thiết.

### useMemo là gì?

- `useMemo` là một hook trong React được sử dụng để ghi nhớ giá trị tính toán (computed value) giữa các lần render. Khi bạn sử dụng `useMemo`, React sẽ chỉ tính toán lại giá trị khi các phụ thuộc (dependencies) thay đổi. Nếu các phụ thuộc không thay đổi, React sẽ trả về giá trị đã lưu trữ trước đó, giúp tránh việc tính toán lại không cần thiết.

### useCallback là gì?

- `useCallback` là một hook trong React được sử dụng để ghi nhớ một hàm giữa các lần render. Khi bạn sử dụng `useCallback`, React sẽ chỉ tạo lại hàm khi các phụ thuộc (dependencies) thay đổi. Nếu các phụ thuộc không thay đổi, React sẽ trả về hàm đã lưu trữ trước đó, giúp tránh việc tạo lại hàm không cần thiết.

## useId

### Vấn đề

- Trong React, khi bạn cần tạo các ID duy nhất cho các phần tử DOM, đặc biệt là khi làm việc với các component lặp lại hoặc dynamic, việc tạo ID duy nhất có thể trở nên phức tạp. Trước đây, bạn có thể sử dụng các thư viện bên ngoài hoặc tự tạo ID bằng cách sử dụng các hàm như `Math.random()` hoặc `Date.now()`. Tuy nhiên, điều này có thể dẫn đến việc tạo ra các ID không đồng nhất hoặc không đảm bảo tính duy nhất.

### useId là gì?

- `useId` là một hook trong React được giới thiệu để giúp tạo ra các ID duy nhất cho các phần tử DOM một cách dễ dàng và đồng nhất. Khi bạn sử dụng `useId`, React sẽ tự động tạo ra một ID duy nhất cho mỗi lần render của component, đảm bảo rằng các ID này không bị trùng lặp và có thể được sử dụng để liên kết các phần tử DOM với nhau.

### Cách sử dụng useId

- Để sử dụng `useId`, bạn cần thực hiện các bước sau:
  B1: Import `useId` từ React.
  B2: Sử dụng `useId` trong component của bạn để tạo ra một ID duy nhất. Bạn có thể sử dụng ID này để liên kết các phần tử DOM với nhau, ví dụ như liên kết giữa một input và label.

## useDeferredValue

### Vấn đề

- Trong React, khi state thay đổi liên tục và nhanh (ví dụ: người dùng gõ vào ô tìm kiếm), nếu mỗi lần thay đổi đều kích hoạt một tác vụ render nặng (như lọc, sắp xếp danh sách lớn), giao diện có thể bị giật, lag vì trình duyệt phải render lại toàn bộ ngay lập tức. Bạn muốn phần input vẫn phản hồi mượt mà, còn phần kết quả nặng thì có thể "trễ" lại một chút cũng không sao. Đây là lúc useDeferredValue phát huy tác dụng.

### useDeferredValue là gì?

useDeferredValue là một hook cho phép bạn tạo ra một bản sao trễ (deferred) của một giá trị. React sẽ ưu tiên cập nhật UI theo giá trị gốc trước (để đảm bảo tương tác như gõ phím luôn mượt), sau đó mới cập nhật giá trị trễ ở "background" khi trình duyệt rảnh.

Nói cách khác:

- Giá trị gốc (value) → cập nhật ngay lập tức, ưu tiên cao (ví dụ: nội dung ô input).
- Giá trị trễ (deferredValue) → cập nhật sau, có thể "theo sau" giá trị gốc một chút, dùng cho phần render nặng.

Về bản chất, nó tương tự useTransition, nhưng thay vì bạn chủ động đánh dấu một cập nhật state là "low priority", useDeferredValue cho bạn một giá trị có độ ưu tiên thấp — hữu ích khi bạn không kiểm soát được nơi state được set (ví dụ value đến từ props, hoặc từ một hook/thư viện khác).

### Cách sử dụng useDeferredValue

B1: Import useDeferredValue từ React.

B2: Truyền giá trị bạn muốn "trễ hóa" vào hook, nhận về một giá trị trễ:

<!-- jsx
const deferredQuery = useDeferredValue(query);
-->

B3: Dùng deferredQuery cho phần component nặng (danh sách kết quả, biểu đồ...), còn query gốc thì dùng cho input để đảm bảo gõ phím mượt.

Ví dụ:

<!-- jsx
function SearchPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* SearchResults nhận deferredQuery, có thể "chậm" hơn input một nhịp */}
      <SearchResults query={deferredQuery} />
    </>
  );
} -->

### So sánh nhanh với useTransition

useDeferredValue:

- trễ hóa gì: một giá trị cụ thể (value), ví dụ: query.
- dùng khi: Không kiểm soát được nơi tạo state (props, thư viện khác), muốn render mượt mà cho input, còn phần nặng thì trễ lại.

useTransition:

- trễ hóa gì: một cập nhật state cụ thể (setState), ví dụ: setQuery.
- dùng khi: bạn tự gọi setState, muốn đánh dấu cập nhật này là "low priority", để React ưu tiên render các phần khác trước.

### Khi nào nên dùng

- tìm kiếm/ lọc dữ liệu lớn theo thời gian thực
- render danh sách lớn, biểu đồ, bảng dữ liệu phụ thuộc vào input người dùng
- khi giá trị đến từ props hoặc một state bạn không trực tiếp set (nên không thể dùng useTransition)
