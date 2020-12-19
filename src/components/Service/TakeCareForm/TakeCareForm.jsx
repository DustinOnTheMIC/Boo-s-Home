import React, { Component } from "react";
import './CssTakeCareForm.css'
import OneInputBox from "./../../../components/InputBox/OneInputBox";
import DatePicker from "./../../../components/DateTimePicker/DatePicker";
import TimePicker from "./../../../components/DateTimePicker/TimePicker";

class TakeCareForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount = () =>{
      this.setState(
        {id: 'id account'}
      )
    }

    handleChangeTimeCome = (time) => {
      let newTime = time.split(' ')
      if(newTime[2] === 'pm')
        newTime[0] = (parseInt(newTime[0])+12).toString()
      newTime.pop()
      this.setState(
        {timeCome: `${newTime[0]} ${newTime[1]}`}
      )
      console.log(this.state);
    }

    onChangeDateCome = (date) => {
      this.setState(
        {dateCome: date}
      )
    }

    handleChangeTimeGo = (time) => {
      let newTime = time.split(' ')
      if(newTime[2] === 'pm')
        newTime[0] = (parseInt(newTime[0])+12).toString()
      newTime.pop()
      this.setState(
        {timeGo: `${newTime[0]} ${newTime[1]}`}
      )
      console.log(this.state);
    }
  
      onChangeDateGo = (date) => {
        this.setState(
          {dateGo: date}
        )
      }

    onChangeNote = (note) => {
      this.setState(
        {note: note}
      )
    }

    isValidDateTime = (dateCome, dateGo, timeCome, timeGo) => {
      if(dateCome === '' || dateGo === '' || timeCome === '' || timeGo === '') {
        return false
      }
      if(dateCome[2] === dateGo[2]){//year
        if(dateCome[1] === dateGo[1]){//month
          if(dateCome[0] === dateGo[0]){//day
            if(timeCome[0] === timeGo[0]){//hour
              if(timeCome[1] === timeGo[1]){//mins
                return false
              }else if(timeCome[1] > timeGo[1]){//min
                return false
              }
              return true
            }else if(timeCome[0] < timeGo[0]){//hour
              return true
            } 
            return true
          }else if(dateCome[0] > dateGo[0]){//day
            return false
          } 
          return true
        }else if(dateCome[1] > dateGo[1]){//month
          return false
        }
        return true
      }else if(dateCome[2] > dateGo[2]){//year
        return false
      }
      return true
    }

    onSubmitForm = () => {
      const {dateCome, dateGo, timeCome, timeGo} = this.state

      if(!dateCome || !dateGo || !timeCome || !timeGo){
        alert('Please enter all info')
      }
      else{
        if(window.confirm('Hãy chắc chắn các thông tin là chính xác')){
          let arrDateCome = dateCome.split(' ');
          let arrDateGo = dateGo.split(' ');
          let arrTimeCome = timeCome.split(' ');
          let arrTimeGo = timeGo.split(' ');
          setTimeout(() => {
            if(this.isValidDateTime(arrDateCome, arrDateGo, arrTimeCome, arrTimeGo)){
              //call api here
              this.props.onSubmit(this.state)
            }else{
              console.log('false');
            }
          }, 10);
        }
      }
    }

    onCloseForm = () => {
        this.props.onCloseForm(this.props.id)
    }
  render() {
    const {title, id} = this.props;
    return (
      <div id={id} className="container-fluid mt-5 form-shower d-none scroll">
        <div className="row justify-content-center">
          <div id='scrollDiv' className="col-12 col-lg-6 bg-light rounded mt-5 pb-5 ">
            <h1 className="text-center">{title}</h1>
            <DatePicker isCome={true} onChangeDate={this.onChangeDateCome} id={`DatePicker${id}Come`}/>
            <TimePicker id={`TimePicker${id}Come`} handleChange={this.handleChangeTimeCome} />
            <DatePicker isCome={false} onChangeDate={this.onChangeDateGo} id={`DatePicker${id}Go`}/>
            <TimePicker id={`TimePicker${id}Go`} handleChange={this.handleChangeTimeGo} />
            <OneInputBox onchange={this.onChangeNote} label="Ghi chú" />
            <button 
                className="btn btn-primary mt-5 mx-3 float-right"
                onClick={this.onSubmitForm}>
              Xác Nhận
            </button>
            <button
              onClick={this.onCloseForm}
              className="btn btn-primary mt-5 mx-3 float-right">
              Hủy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TakeCareForm;
