import React, { Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            rePassword: ''
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        const NAME = target.name;
        this.setState({
            [NAME] : value
        })
    }

    handleSubmit = () => {
        const { userName, password, rePassword } = this.state;
        if(password !== rePassword){
            alert('Password and rePassword must be the same')
        }
        console.log(this.state);
    }

    render() {
        return (
            <div className="container-fluid mx-0 px-0 bg-light">
                <div className="col-12 mx-0 px-0">
                    <div className="row">
                        <div className="div-left col-12 col-md-3 mx-0 px-0 bg-dark">
                            <div className="content-div-left col-12 col-md-3 text-light">
                                <h1 className='text-center'>Đăng Ký</h1>
                                <p>Với việc đăng ký, bạn sẽ cung cấp thông tin tài khoản
                                    để sử dụng cho các dịch vụ đặt lịch. Hãy đảm bảo rằng các
                                    thông tin bạn đăng ký là hoàn toàn đúng, để Boo's Home có
                                    thể xác nhận thông tin của bạn, mọi quyền lợi của bạn sẽ được
                                    Boo's Home bảo vệ.
                                </p>
                                <br></br>
                                <p>Thông tin của bạn sẽ được bảo mật.</p>
                            </div>
                        </div>
                        <div className="div-right col-12 col-md-8 mx-0 px-0">
                            <h1 className="text-center mb-5">Boo's Home</h1>
                            <div className="row justify-content-center mt-5">
                                <div className="content-div-right col-10 col-md-6">
                                    <input className='mb-3' type="text" name='userName' onChange={this.handleChange} placeholder="Gmail"></input>
                                    <input className='mt-3' type="password" name='password' onChange={this.handleChange} placeholder="Mật khẩu"></input>
                                    <input className='mt-3' type="password" name='rePassword' onChange={this.handleChange} placeholder="Xác Nhận Mật Khẩu"></input>
                                    <div className="mt-5 col-12">
                                        <div className="col-12 row justify-content-center">
                                            <a className="btn btn-primary" href='#asd' onClick={this.handleSubmit}>Đăng Kí</a>
                                        </div>
                                        <div className='col-12 row justify-content-center'>
                                        <a href='/Login' onClick={this.handleLogin}>Bạn đã có tài khoản?</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Register;