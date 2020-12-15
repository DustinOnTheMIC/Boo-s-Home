import React, { Children, Component } from 'react';

class OneService extends Component {
    onClickService = () => {
        this.props.onClickService(this.props.formControl)
    }

    render() {
        const {title, price, content, formControl} = this.props
        return (
            <div className="col-md-6 col-sm-12 my-3">
                <a href='#' onClick={this.onClickService} formControl={formControl} className="font-weight-bold text-title ">{title}</a>
                <span className="font-weight-bold float-right text-title">{price}</span>
                {content}
                {this.props.children}
            </div>
        );
    }
}

export default OneService;