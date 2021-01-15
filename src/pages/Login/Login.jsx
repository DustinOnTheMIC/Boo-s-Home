import React, { Component } from 'react';
import '../Login/CssLogin.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Alert from './../../components/Alert/Alert'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            alert:{
                count: 0,
                addClass: 'd-none'
            }
        }
    }

    email = ''
    password = ''

    handleChange = (e) =>{
        let target = e.target;
        let value = target.value;
        const NAME = target.name
        if(NAME === 'email')
            this.email = value
        if(NAME === 'password')
            this.password = value
    }

    handleLogin = (e) => {
        e.preventDefault();
        
        const input={
            email: this.email,
            password: this.password
        };

        this.callAPI(input);
    }

    callAPI = (input) => {  
        axios.post('https://dichvuthucung.herokuapp.com', input).then(resp => {
            let token = resp.data.data.access_token
            if(token.length !== 0) {
                localStorage.setItem('token', token)
                const {history} = this.props
                history.goBack()
            }
        })
        .catch(err => {
            const {count} = this.state.alert
            let alert = {
                addClass:'',
                count: count + 1,
                content: err,
                titleButtonConfirm: 'Ok Nha',
                titleButtonCancel: 'Ok luôn',
                titleAlert:'Thông Báo',
                isConfirm: false,
            }
            this.setState({alert: alert})
        });
    }

    closeAlert = () => {
        const {count} = this.state.alert
        let alert = {
            addClass:'d-none',
            count: count + 1,
        }
        this.setState({alert: alert})
    }

    render() {
        const { titleAlert, titleButtonCancel, titleButtonConfirm, content, addClass, count, isConfirm} = this.state.alert;
        return (
            <form className="container-fluid mx-0 px-0 bg-light">
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
                            <div className="text-center">
                                <a href="/" className="mb-5 text-title-login">Boo's Home</a>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <div className="content-div-right col-10 col-md-6">
                                    <input className='mb-3' type="text" name='email' onChange={this.handleChange} placeholder="Tên đăng nhập / Gmail"></input>
                                    <input className='mt-3' type="password" name='password' onChange={this.handleChange} placeholder="Mật khẩu"></input>
                                    <div className="mt-5 button-group">
                                        <Link className="btn btn-primary mx-1 my-4" to='/register'>Đăng Kí</Link>
                                        <Link className="btn btn-secondary mx-1 my-4" to='#this' onClick={this.handleLogin}>Đăng Nhập</Link>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <Alert
                    key={count}
                    titleAlert={titleAlert}
                    titleButtonCancel={titleButtonCancel}
                    titleButtonConfirm={titleButtonConfirm}
                    content={content}
                    addClass={addClass}
                    handleConfirmAlert={this.closeAlert}
                    isConfirm={isConfirm}
                    handleCancelAlert={this.closeAlert}
                />
            </form>
        );
    }
}

export default Login;