import React, { Component } from 'react';
import '../Login/CssLogin.css'
import {Link} from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        let target = e.target;
        let value = target.value;
        const NAME = target.name
        this.setState({
            [NAME]: value
        })
    }

    componentDidUpdate(prevProps){
        console.log('updated: ', prevProps.location);
    }

    handleLogin = () => {
        localStorage.setItem('idAccount','id account')
        const {history, location} = this.props
        // // console.log(this.state);
        console.log('history asd',history);
        console.log('location: ',location);
        // console.log('length: ',history.length);
        // console.log('location: ', prevProps.location);
        // console.log('key: ', location.key);
        history.goBack()
    }

    render() {
        console.log( this.props);
        return (
            <div className="container-fluid mx-0 px-0 bg-light">
                <div className="col-12 mx-0 px-0">
                    <div className="row">
                        <div className="div-left col-12 col-md-3 mx-0 px-0 bg-dark">
                            <div className="content-div-left col-12 col-md-3 text-light">
                                <h1 className='text-center'>Đăng Nhập</h1>
                                <p>Với việc đăng nhập, bạn đồng ý với các điều khoản dịch vụ
                                    về bảo mật của Boo's Home. Bạn sẽ cung cấp thông tin tài khoản
                                    để sử dụng cho các dịch vụ đặt lịch.
                                </p>
                                <br></br>
                                <p>Thông tin của bạn sẽ được bảo mật.</p>
                            </div>
                        </div>
                        <div className="div-right col-12 col-md-8 mx-0 px-0">
                            <h1 className="text-center mb-5">Boo's Home</h1>
                            <div className="row justify-content-center mt-5">
                                <div className="content-div-right col-10 col-md-6">
                                    <input className='mb-3' type="text" name='userName' onChange={this.handleChange} placeholder="Tên đăng nhập / Gmail"></input>
                                    <input className='mt-3' type="password" name='password' onChange={this.handleChange} placeholder="Mật khẩu"></input>
                                    <div className="float-right mt-5">
                                        <Link className="btn btn-primary mx-1 my-4" to='/register'>Đăng Kí</Link>
                                        <Link className="btn btn-secondary mx-1 my-4" to='#this' onClick={this.handleLogin}>Đăng Nhập</Link>
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

export default Login;