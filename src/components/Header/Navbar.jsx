import React, { Component } from 'react';
import './CssNavbar.css';
import {Link} from 'react-router-dom' 


class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            product: [{id: 1, name: 'asd'}],
            login: localStorage.getItem('token') == null ? false : true, //status user
            countToggle: false
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

    handleScroll = () => {
        let navbar = document.getElementById('navbar')
        //scroll >10 -> make navbar background secondary-color and back
        if(navbar !== null)
            if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
                navbar.classList.add("bg-secondary")
                navbar.classList.remove("bg-transparent")
            }else{
                navbar.classList.add("bg-transparent")
                navbar.classList.remove("bg-secondary")
            }
        
    }

    handleToggle = () => {
        let {countToggle} = this.state
        let div = document.getElementById('toggleDiv')
        let ul = document.getElementById('ulItems')
        countToggle = !countToggle
        if(countToggle) {
            div.classList.add('bg-secondary')
            ul.classList.add('text-center')
            this.setState({countToggle : countToggle})
        }else{
            setTimeout(() => {
                div.classList.remove('bg-secondary')
                ul.classList.remove('text-center')
            }, 450);
            this.setState({countToggle : countToggle})
        }
        
    }

    handleLogout = () => {
        localStorage.clear()
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-md navbar-light bg-secondary sticky-top nav-size bg-transparent px-0 pt-0">
                <div id='toggleDiv' className="container-fluid">
                    <a href="/"><img alt='logo' className="logo-size" src="https://img.icons8.com/cotton/64/000000/cat--v1.png"/></a>
                    <button id='buttonToggle' type="button" className="navbar-toggler" onClick={this.handleToggle} data-toggle="collapse" data-target="#navCollapse"
                        aria-controls="navCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navCollapse">
                        <ul id='ulItems' className="navbar-nav ml-auto ">
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
                                <a href="/login" className="nav-link text-light text-title">Login</a>
                            </li>
                            <li id="logout" className="nav-item">
                                <a href="/" onClick={this.handleLogout} className="nav-link text-light text-title">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;