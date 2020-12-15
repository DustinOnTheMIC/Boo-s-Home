import React, { Component } from 'react';
import './CssNavbar.css';
import logo from '../../logo/logo.png'

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            product: [{id: 1, name: 'asd'}],
            login: false //status user
        }
    }

    componentDidMount(){
        document.getElementById('navbar').classList.remove('bg-secondary') //make navbar background transparent
        window.addEventListener('scroll', this.handleScroll) //make navbar background secondary-color while scrolling
        this.checkLogin(this.state.login) //check if user login, visible element login
    }

    checkLogin = (status) => {
        let liLogin = document.getElementById('login')
        let liLogOut = document.getElementById('logout')
        //if login -> visible li logout
        this.state.login ? liLogOut.classList.remove('d-none') : liLogOut.classList.add('d-none')
        //if login -> not visible li login
        this.state.login ? liLogin.classList.add('d-none') : liLogin.classList.remove('d-none')

    }

    handleScroll = (event) => {
        let navbar = document.getElementById('navbar')
        //scroll >10 -> make navbar background secondary-color and back
        if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
            navbar.classList.add("bg-secondary")
            navbar.classList.remove("bg-transparent")
        }else{
            navbar.classList.add("bg-transparent")
            navbar.classList.remove("bg-secondary")
        }
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-md navbar-light bg-secondary sticky-top nav-size bg-transparent">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand col-6"><img className="logo-size" src={logo} alt='asd'/></a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navCollapse"
                        aria-controls="navCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navCollapse">
                        <ul className="navbar-nav ml-auto float-right">
                            <li className="nav-item">
                                <a href="#home" className="nav-link text-light text-title active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#service" className="nav-link text-light text-title">Service</a>
                            </li>
                            <li className="nav-item">
                                <a href="#aboutUs" className="nav-link text-light text-title">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#footer" className="nav-link text-light text-title">Contact</a>
                            </li>
                            <li id="login" className="nav-item">
                                <a href="#a" className="nav-link text-light text-title">Login</a>
                            </li>
                            <li id="logout" className="nav-item">
                                <a href="#a" className="nav-link text-light text-title">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;