import React, { Component } from 'react';

class index extends Component {
    render() {
        const {id,onClick,title,target,control} = this.props
        return (
            <span id={id} onClick={onClick} 
                className="card-header btn border border-0 mx-0 col-sm-12 col-md-3 rounded-0 px-0 float-left"
                data-toggle="collapse" data-target={target} aria-controls={control} >{title}
            </span>
        );
    }
}

export default index;