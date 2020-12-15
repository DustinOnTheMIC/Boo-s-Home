import React, { Component } from 'react';
import './CssBody.css';
import homeBackground from '../../image/background-body-cat.jpg'
import Service from '../Service/Service'
import AboutUs from '../AboutUs/AboutUs'

class body extends Component {
    render() {
        return (
            <div>
                <div>
                <div id="home" className="div1">
                    <img className="image-first-cat" src={homeBackground} alt=""></img>
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