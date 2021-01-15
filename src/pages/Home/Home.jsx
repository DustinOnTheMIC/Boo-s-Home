import React, { Component } from 'react';
import Header from '../../components/Header/Navbar';
import './CssIndex.css';
import Body from '../../components/BodyHome/Body'
import Footer from '../../components/Footer/Footer'

class index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body history={this.props.history}/>
                <Footer/> 
            </div>
        );
    }
}

export default index;