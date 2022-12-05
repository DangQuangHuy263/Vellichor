# Vellichor
Nhóm 3 Đồ án cuối kỳ - Môn học Phát triển Web kinh doanh
Trước khi bắt đầu, bạn cần đọc những hướng dẫn dưới đây!
1.	Để chạy trang web, bạn cần truy cập vào đường dẫn:
2.	Để có thể bắt đầu mua hàng trên Velichor, bạn cần:
       + B1: Vào trang HomePage
       + B2: Để bắt đầu mua hàng bạn cần truy cập vào đường dẫn vào trang chủ của Vellichor
       + B3: Chọn sản phẩm mà bạn muốn mua
       + B4: Tiến hành thanh toán và chờ đợi nhận hàng
3.	Cấu trúc thư mục: 
       + Thư mục Public chứa các file code, asset(data, hình ảnh).
4.Chức năng website
       4.1. Đăng ký/ đăng nhập:
       Với tài khoản, khi đăng ký, khách hàng bắt buộc phải điền thông tin như tên đăng nhập/SĐT, email và mật khẩu. Về đăng nhập, người dùng có thể liên kết tài khoản với các tài khoản xã hội khác như Facebook, Google, Apple. 

       Nếu người dùng quên mật khẩu có thể lấy lại mật khẩu bằng cách xác minh mã OTP thông qua email/SĐT và đặt lại mật khẩu mới. Đặc biệt, khách hàng vẫn có thể mua sản phẩm khi không có tài khoản. 

       4.2. Thông tin tài khoản cá nhân:
       •	Tài khoản của tôi (Hồ sơ cá nhân)
       Khách hàng điền/thay đổi thông tin cá nhân của mình như avatar, họ và tên, số điện thoại, email hay ngày tháng năm sinh để nhận được những ưu đãi hấp dẫn dành riêng cho “Khách hàng thân thiết” từ Vellichor.
       •	Thông tin giao hàng 
       Khách hàng được lưu trữ nhiều địa chỉ giao hàng khác nhau như để mua cho bản thân, gia đình, bạn bè… 
       •	Đơn mua
       Tính năng này giúp khách hàng dễ dàng theo dõi các đơn hàng mình đã mua. 
       •	Kho voucher
       Voucher được lưu trữ tự động hoặc thủ công trên thanh nhập ”Nhập mã voucher” giúp khách hàng dễ sử dụng khi đặt mua sản phẩm của Vellichor.
       •	Sản phẩm đã lưu
       Những sản phẩm khách hàng nhấn ưu thích “lưu sản phẩm” khi mua sắm sẽ được lưu tại đây.

       4.3. Giỏ hàng  
       •	Khi khách hàng chưa mua sắm 
       Giỏ hàng sẽ hiện “Chưa có sản phẩm trong giỏ hàng của bạn” và button “Mua sắm ngay” để chuyển đến trang mua sắm khi khách hàng click vào. 
       •	Mua ngay sản phẩm
       Khi khách hàng lướt trang mua sắm, lựa chọn button “Mua ngay” thì sản phẩm ấy sẽ được thêm vào giỏ hàng và chuyển người dùng đến trang giỏ hàng. 
       •	Xem giỏ hàng
       Khi khách hàng lướt trang mua sắm, chọn button “Thêm vào giỏ hàng”, sản phẩm sẽ được cập nhật tự động vào giỏ hàng. Chỉ khi khách hàng nhấn chọn giỏ hàng thì mới chuyển đến trang giỏ hàng và hiện ra những sản phẩm mà khách hàng đã chọn.

       Tại đây, khách hàng sử dụng các chức năng như thêm sản phẩm tùy ý muốn giá sản phẩm cũng sẽ được tự động cập nhật theo. 
       •	Chức năng xóa sản phẩm khi không muốn mua nữa. 
       •	Chọn voucher giảm giá/nhập code voucher.
       •	Lựa chọn các sản phẩm muốn mua bằng cách tick chọn sản phẩm, tổng tiền cần thanh toán và số lượng sản phẩm sẽ được cập nhật ở gần cuối trang web. 

       4.4. Tìm kiếm sản phẩm
       Khách hàng có thể tìm kiếm sản phẩm mà họ quan tâm qua tên sản phẩm/mùi hương/bộ sưu tập. Trang web sẽ hiện ra những đề xuất tương thích với từ khóa khách hàng tìm kiếm.

       4.5. Thanh toán
       Đơn hàng cho phép khách hàng chọn địa chỉ đã có sẵn trong “Thông tin giao hàng” của account hoặc nhập địa chỉ mới. 

       Xác nhận lại các sản phẩm mua, phương thức thanh toán.
       Xác nhận giá thành ban đầu của đơn hàng, số tiền được giảm và số tiền cuối cùng cần thanh toán. 

       4.6. Phương thức thanh toán
       Trang website tích hợp đa dạng hình thức thanh toán thuận tiện cho khách hàng. Khách hàng có thể lựa chọn thanh toán trực tiếp khi nhận hàng (COD) hay thanh toán trước thông qua Ví điện tử (Zalo Pay, Momo, Shopee Pay, Paypal,..) hay Thẻ tín dụng (Mastercard, thẻ Visa, thẻ JCB,...) 

       4.7. Trang bán hàng của từng sản phẩm
       Hình ảnh, tên, giá thành sản phẩm kèm theo đó sẽ có nội dung giới thiệu sản phẩm như Bộ sưu tập, dung tích, thời gian sử dụng sản phẩm cũng như mùi hương, ý nghĩa của sản phẩm giúp khách hàng dễ dàng lựa chọn. 

       Button “Lưu sản phẩm” giúp khách hàng dễ dàng lưu những sản phẩm mình thích về trang cá nhân. 

       Button cho khách hàng điều chỉnh số lượng sản phẩm muốn mua và kèm theo đó là “Thêm vào giỏ hàng” - để mua hàng hay “Mua ngay” giúp khách hàng mua sản phẩm nhanh chóng, không rườm rà, có thể mua hàng ngay cả khi chưa có tài khoản.

       Hệ thống sẽ luôn hiện các sản phẩm Best seller để gợi ý mua hàng cho người dùng qua từng trang sản phẩm.

       4.8. Mua hàng ngay khi chưa có tài khoản:
       Nếu khách hàng đã có tài khoản sẽ chọn “Đăng nhập ngay”

       Khách hàng cần điền thông tin giao hàng bao gồm các thông tin bắt buộc như: Họ và tên, Số điện thoại, Tỉnh/thanh phố, địa chỉ cụ thể. Tùy chọn phương thức thanh toán đa dạng.  

       Khách hàng xác nhận lại sản phẩm, số lượng, giá thành đơn hàng mình mua (có thể nhập code voucher - nếu có). Cuối cùng là nhấn “Xác nhận đặt hàng“. Vellichor sẽ luôn hiện thông báo “Đặt hàng thành công” sau khi khách hàng đặt hàng. 



