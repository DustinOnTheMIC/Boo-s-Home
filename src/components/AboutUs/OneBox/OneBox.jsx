import React, { Component } from 'react';
import './CssOneBox.css'

class OneBox extends Component {
    render() {
        const {title, content} = this.props
        return (
            <div className="mx-1 bg-light text-dark my-3 one-box container pt-3">
                <h3>{title}</h3>
                {content}
            </div>
        );
    }
}

export default OneBox;