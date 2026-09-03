import { useState, useEffect } from "react";

function Image() {
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage({ file, preview: URL.createObjectURL(file) });
  };

  useEffect(() => {
    // nghĩa là khi component được render lần đầu tiên, useEffect sẽ được gọi và tạo ra một URL object cho hình ảnh được chọn.
    // Khi component bị unmount hoặc khi image thay đổi, useEffect sẽ thực hiện cleanup bằng cách gọi URL.revokeObjectURL để giải phóng bộ nhớ đã được cấp phát cho URL object đó.
    // Điều này giúp tránh rò rỉ bộ nhớ khi người dùng chọn nhiều hình ảnh khác nhau trong quá trình sử dụng ứng dụng.
    return () => {
      if (image && image.preview) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image]);

  return (
    <div>
      <h1>Image Component</h1>
      <input type="file" accept="image/*" onChange={handleChange} />
      {image && (
        <img
          style={{ maxWidth: "20%", height: "auto" }}
          src={image.preview}
          alt="Preview"
        />
      )}
    </div>
  );
}

export default Image;
