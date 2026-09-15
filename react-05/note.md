# CSS/SCSS Module

## Vấn đề

```

App
    Categories
    Products
    Posts

```

- Trùng lặp class giữa các compent
- bị ghi đè style khi import nhiều component có cùng class name

### giải pháp

- Đặt class khác ==> rất khó: 1 dự án nhiều người làm
- Sử dụng các thư viện để scope stylesheet ==> Style chỉ hoạt động trong component đó, không bị ảnh hưởng bởi các component khác
- CSS Module: ===> Tự generate các class khác nhau ==> thêm hậu tố vào class name để tránh trùng lặp
