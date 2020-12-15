import React, { Component } from 'react';
import OneBox from './OneBox/OneBox'
import './CssAboutUs.css'
class AboutUs extends Component {
    render() {
        const baoHanh = <p>Dịch vụ tận tình với nhân viên chăm sóc có tay nghề cao sẽ
                            đem đến cho bạn một cảm giác thoải mái khi gửi pets của mình
                            ở đây.</p>
        const kyThuatVien = <p>Chuyên nghiệp và kỹ lưỡng là những điều mà từng thành 
                            viên Boo's Home xem đó là cốt lõi để tạo ra môi trường
                            như đúng với tên gia đình của Boo.</p>
        const giaCaHopLy = <p>Boo's Home chọn cách chăm sóc pets bằng tay bởi đó là cách tốt nhất
                            để giữ cho pets một tinh thần thoải mái nhất, và một mức phí dễ chịu.</p>
        const dungCuCauKy = <p>Bàn chải lông ngựa, lông heo, khăn lông mềm và không ít các loại dung dịch vệ sinh được
                            chọn mua trong và ngoài nước sẵn sàng cho
                            việc đánh bay mọi vết bẩn.</p>
        const mayMocHienDai = <p>Trang bị máy móc hiện đại để loại bỏ hầu hết độ ẩm sau khi tắm và 
                            vi khuẩn gây mùi.</p>
        const gioHoatDong = <p>Kéo dài từ 9h - 21h mỗi ngày để phục vụ nhu cầu của các pets.</p>
        return (
            <div className="col-12 row justify-content-center text-light about mx-0">
                <OneBox title ="CHÍNH SÁCH" content ={baoHanh}/>
                <OneBox title = "NHÂN VIÊN CHĂM SÓC" content ={kyThuatVien}/>
                <OneBox title ="GIÁ HỢP LÝ" content ={giaCaHopLy}/>
                <OneBox title = "DỤNG CỤ CẦU KỲ" content ={dungCuCauKy}/>
                <OneBox title ="THIẾT BỊ HIỆN ĐẠI" content ={mayMocHienDai}/>
                <OneBox title = "THỜI GIAN HOẠT ĐỘNG" content ={gioHoatDong}/>
                
            </div>
        );
    }
}

export default AboutUs;