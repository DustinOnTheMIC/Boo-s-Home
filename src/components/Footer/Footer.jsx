import React, { Component } from "react";
import "./CssFooter.css";
class Footer extends Component {
  render() {
    return (
      <footer id="footer" className=" font-small mdb-color lighten-3 pt-4 justify-content-center">
        <div className="container-fluid text-center text-md-left col-10 justify-content-center">
          <div className="row">
            <div className="col-md-5 col-lg-4 mr-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold text-uppercase mb-4">
                Boo's Home
              </h5>
              <p>
                Khẳng định thương hiệu.
              </p>
              <p>
              Là một spa chuyên nghiệp với dịch vụ chăm sóc và Khám chữa bệnh hiện đại, nhân viên tay nghề cao, 
              sự tỉ mỉ trong từng công đoạn để mang lại chất lượng phục vụ tốt nhất cho các pets. Đó 
              là tiêu chí mà gia đình của Boo sẽ luôn hướng đến ở hiện tại và trong tương lai.
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none"></hr>
            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold text-uppercase mb-4">ĐỊA CHỈ</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <i className="fas fa-home mr-3"></i> ĐÀ NẴNG, 145 abc street
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 84 234 567 88
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 84 234 567 89
                  </p>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none"></hr>
            <div className="col-md-3 col-lg-3 text-center">
              <div className="col-12">
                <h5 className="font-weight-bold text-uppercase mb-4">SOCIAL MEDIA</h5>
                <a type="button" className="btn-floating btn-fb col-3 ml-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a type="button" className="btn-floating btn-tw col-3 ml-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a type="button" className="btn-floating btn-gplus col-3 ml-3">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: BuiDucTin
        </div>
      </footer>
    );
  }
}

export default Footer;
