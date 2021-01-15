import React, { Component } from 'react';
import './CssAlert.css'


class Alert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count
        }
    }

    handleCancel = () => {
        this.props.handleCancelAlert()
    }
    handleConfirm = () => {
        this.props.handleConfirmAlert('alert',this.props.isConfirm)
    }

    componentDidMount = () => {
    }

    render() {
        const {key, addClass, titleAlert, content, titleButtonCancel, titleButtonConfirm} = this.props
        return (
            <div id='alert' name='alert' key={key} className={`alert ${addClass}`}>
                <div className="container-fluid">
                    <h1 className="mt-0 pt-0">{titleAlert}</h1>
                    <p className="mb-5">{content}</p>
                    <div className="btn-alert">
                        <button className="btn btn-primary mr-4" onClick={this.handleCancel} >{titleButtonCancel}</button>
                        <button className="btn btn-primary" type='button' onClick={this.handleConfirm} >{titleButtonConfirm}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;