import React, { Component } from 'react';

class OneService extends Component {
    
    onClickService = () => {
        this.props.onClickService(this.props.formcontrol)
    }

    render() {
        const {title, price, content, formcontrol} = this.props
        return (
            <div className="col-md-6 col-sm-12 my-3">
                <div className="col-12 d-flex px-0">
                    <a href='#this' onClick={this.onClickService} formcontrol={formcontrol} className="font-weight-bold float-left text-title mr-4">{title}</a>
                    <span className="font-weight-bold float-right text-title">{price}</span>
                </div>
                {content}
                {this.props.children}
            </div>
        );
    }
}

export default OneService;