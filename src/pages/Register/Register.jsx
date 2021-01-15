import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './CssRegister.css'
import Alert from './../../components/Alert/Alert'
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alert: {
                count: 0,
                addClass: 'd-none'
            }
        }
    }
    email = ''
    phone = ''
    password = ''
    rePassword = ''

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        const NAME = target.name;
        if(NAME === 'email')
            this.email = value
        if(NAME === 'phone')
            this.phone = value
        if(NAME === 'password')
            this.password = value
        if(NAME === 'rePassword')
            this.rePassword = value
    }

    handleSubmit = () => {
        const {count} = this.state.alert
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(this.password==='' || this.userName==='' || this.rePassword===''){
            let alert = {
                addClass:'',
                count: count + 1,
                content: 'Điền cho đủ thông tin chứ bạn ơi???',
                titleButtonConfirm: 'Ok lại',
                titleButtonCancel: 'Ok lại luôn',
                titleAlert:'Thông Báo',
                isConfirm: false,
            }
            this.setState({alert: alert})
        }
        else if(this.password !== this.rePassword){
            let alert = {
                addClass:'',
                count: count + 1,
                content: 'ủa rồi mật khẩu với nhắc lại mật khẩu mà sao khác nhau được bạn???',
                titleButtonConfirm: 'Ok lại',
                titleButtonCancel: 'Ok lại luôn',
                titleAlert:'Thông Báo',
                isConfirm: false,
            }
            this.setState({alert: alert})
        }
        else if(!pattern.test(this.email)){
            let alert = {
                addClass:'',
                count: count + 1,
                content: 'Bạn biết cái email nó ra làm sao k???',
                titleButtonConfirm: 'Ok lại',
                titleButtonCancel: 'Ok lại luôn',
                titleAlert:'Thông Báo',
                isConfirm: false,
            }
            this.setState({alert: alert})
        }else{
            let register = {
                email: this.email,
                phone: this.phone,
                password: this.password,
            }
            this.callAPI(register)
        }
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
                            <div className='text-center'>
                                <a href='/' className="text-title-register mb-5">Boo's Home</a>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <div className="content-div-right col-10 col-md-6">
                                    <input className='mb-3' type="text" name='email' onChange={this.handleChange} placeholder="Gmail"></input>
                                    <input className='mb-3' type="number" name='phone' onChange={this.handleChange} placeholder="Phone number"></input>
                                    <input className='mb-3' type="password" name='password' onChange={this.handleChange} placeholder="Mật khẩu"></input>
                                    <input className='mb-3' type="password" name='rePassword' onChange={this.handleChange} placeholder="Xác Nhận Mật Khẩu"></input>
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
            </div>
        );
    }
}

export default Register;