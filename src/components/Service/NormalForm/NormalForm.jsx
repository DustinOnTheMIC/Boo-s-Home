import React, { Component } from "react";
import OneInputBox from "./../../../components/InputBox/OneInputBox";
import DatePicker from "./../../../components/DateTimePicker/DatePicker";
import TimePicker from "./../../../components/DateTimePicker/TimePicker";


var serviceName = ""
var id = ''
var date = ''
var time = ''
var note = ''

class NormalForm extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       serviceName: '',
    //       id: '',
    //       date: '',
    //       time : '',
    //       note:''
    //     }
    // }
    constructor(props) {
      super(props)
      this.state = {
        services: ''
      }
    }

    componentDidMount = () =>{
      // this.setState(
      //   {id: localStorage.getItem('idAccount')}
      // )
      id = localStorage.getItem('idAccount')
      serviceName = this.props.id
    }

    handleChangeTime = (timeIn) => {
      let newTime = timeIn.split(' ')
      if(newTime[2] === 'pm')
        newTime[0] = (parseInt(newTime[0])+12).toString()
      newTime.pop()
      // this.setState(
      //   {time: `${newTime[0]} ${newTime[1]}`,}
      // )
      // console.log(this.state);
      time = `${newTime[0]} ${newTime[1]}`
    }

    onChangeDate = (dateIn) => {
      // this.setState({date: date})
      date = dateIn
    }

    onChangeNote = (noteIn) => {
      // this.setState({note: note})
      // setTimeout(() => {
      //   console.log(this.state);
      // }, 100);
      note = noteIn
    }

    onSubmitForm = () => {
      // this.setState(
      //   {serviceName: this.props.id}
      // )
      // setTimeout(() => {
      //   console.log(this.state);
      // },100)
      // this.props.onSubmit(this.state)
      let oneService = {
        serviceName: serviceName,
          id: id,
          date: date,
          time : time,
          note: note
      }
      let services = []
      services.push(oneService)
      this.setState(
        {services}
      )
      setTimeout(() => {
        console.log('state: ',this.state, 'services: ', this.state.services);
      }, 10);
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
            <DatePicker id={`DatePicker${id}`} onChangeDate={this.onChangeDate} />
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
