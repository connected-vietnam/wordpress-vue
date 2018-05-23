# Home Page Search

## Reference

- https://homedy.com/
- https://rever.vn/

## Search Field

- Search Term
- Location
- Product Type
- Type: `Sold` / `Rent`

## Input

- Gõ vào keywords
- Chọn Mua / Thuê (Default là Mua)
- Chọn Location (Optional) - Có thể dựa vào địa chỉ IP hoặc xin access vào Location
- Chọn Product Type (Optional)

## Output

- Autosuggest theo section, mỗi Section chứa từ tối đa 5 items. Các Section bao gồm: Project, Location, Products

### Projects

- Khi click vào sẽ hiển thị ra những `product` của project đó
- Route to: ProductSearchPage

### Location

- Có thể xem Location ở đây như là 1 địa điểm, có thể là địa chỉ của 1 dự án / hoặc 1 khu đất (hiện chưa có cách cụ thể để extract thông tin này - có thể dựa vào Location của Homedy)
- Route to: ProductSearchPage

### Products

- Route to: Product Detail Page

## Tracking

Cần lưu lại các thông tin sau:

- Từ khóa người dùng hay tìm kiếm nhất
  - Cải thiện database `search term` để làm tính năng như `Google Auto Suggest`
  - Gom nhóm đối tượng để remarketing
  - Kết hợp tool lấy số điện thoại để SMS

### Todo:
- Method to collect data
- Method to extract data to making decision
