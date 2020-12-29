import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './CssRegister.css'

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
        const {history} = this.props;
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!password || !userName || !rePassword)
            alert('require all value')
        if(password !== rePassword){
            alert('Password and rePassword must be the same')
        }
        if(!pattern.test(userName)){
            alert('user name must be a valid pattern for email')
        }
        history.goBack()
        // console.log('submited');
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
                            <div className='text-center '>
                                <a href='/' className="text-title-register mb-5">Boo's Home</a>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <div className="content-div-right col-10 col-md-6">
                                    <input className='mb-3' type="text" name='userName' onChange={this.handleChange} placeholder="Gmail"></input>
                                    <input className='mt-3' type="password" name='password' onChange={this.handleChange} placeholder="Mật khẩu"></input>
                                    <input className='mt-3' type="password" name='rePassword' onChange={this.handleChange} placeholder="Xác Nhận Mật Khẩu"></input>
                                    <div className="mt-5 col-12">
                                        <div className="col-12 row justify-content-center">
                                            <Link className="btn btn-primary" to='#asd' onClick={this.handleSubmit}>Đăng Kí</Link>
                                        </div>
                                        <div className='col-12 row justify-content-center'>
                                            <Link to='/Login' onClick={this.handleLogin}>Bạn đã có tài khoản?</Link>
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