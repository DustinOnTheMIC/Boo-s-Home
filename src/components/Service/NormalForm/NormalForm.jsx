import React, { Component } from "react";
import OneInputBox from "./../../../components/InputBox/OneInputBox";
import DatePicker from "./../../../components/DateTimePicker/DatePicker";
import TimePicker from "./../../../components/DateTimePicker/TimePicker";

class NormalForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
          serviceName: '',
          id: 'id account',
          date: '',
          time : '',
          note:''
        }
    }

    handleChangeTime = (time) => {
      this.setState(
        {time: time}
      )
      console.log(this.state);
    }

    onChangeDate = (date) => {
      this.setState({date: date})
    }

    onChangeNote = (note) => {
      this.setState({note: note})
      setTimeout(() => {
        console.log(this.state);
      }, 100);
    }

    onSubmitForm = () => {
      this.setState(
        {serviceName: this.props.id}
      )
      setTimeout(() => {
        console.log(this.state);
      },100)
    }

    onCloseForm = () => {
        this.props.onCloseForm(this.props.id)
    }
  render() {
      const {title, id} = this.props;
    return (
      <div id={id} className="container-fluid mt-5 form-shower d-none">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 bg-light rounded mt-5 pb-5 ">
            <h1 className="text-center">{title}</h1>
            <DatePicker id={`DatePicker${id}`} onChangeDate={this.onChangeDate} id='datePicker'/>
            <TimePicker id={`TimePicker${id}`} handleChange={this.handleChangeTime} />
            <OneInputBox onchange={this.onChangeNote} label="Ghi chú" />
            <button 
                className="btn btn-primary mt-5 mx-3 float-right"
                onClick={this.onSubmitForm}
                >
              Xác Nhận
            </button>
            <button
              onClick={this.onCloseForm}
              className="btn btn-primary mt-5 mx-3 float-right"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NormalForm;
