import React, { Component } from 'react';
import './CssBody.css';
import homeBackground from '../../image/background-body-cat.jpg'
import Service from '../Service/Service'
import AboutUs from '../AboutUs/AboutUs'
import logo from '../../logo/logo.png'

class body extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="image-first-cat" src={homeBackground} alt=""></img>
                    <div className="logo-home">
                        <div className="d-flex justify-content-center">
                            <img src={logo} className="col-6" style={{display: 'block', width: '100%'}}alt=""/>
                        </div>
                    </div>
                </div>
                <Service/>
                <div id='aboutUs'>
                    <div style={{height:'400px'}}></div>
                    <div style={{paddingBottom: '200px'}} className="container-fluid col-12 col-md-9">
                        <h1 className="title-about">About Boo's Home</h1>
                        <AboutUs/>
                    </div>
                </div>
            </div>
        );
    }
}

export default body;