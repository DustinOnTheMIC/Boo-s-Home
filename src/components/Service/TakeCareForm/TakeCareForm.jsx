import React, { Component } from "react";
import './CssTakeCareForm.css'
import OneInputBox from "./../../../components/InputBox/OneInputBox";
import DatePicker from "./../../../components/DateTimePicker/DatePicker";
import TimePicker from "./../../../components/DateTimePicker/TimePicker";
import Alert from './../../../components/Alert/Alert'
import axios from 'axios';

class TakeCareForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      order: {
        service_id: this.props.id,
      },
      alert: {
        addClass:'d-none',
        count: 1,
        isConfirm: false
      }
    }
  }

  date = ''
  date_go = ''
  time = '8:0'
  time_go = '8:0'
  note = ''
  service_id = ''
  user_id = 'qưe'

  componentDidMount = () =>{
    this.setState(
      {user_id: 'id account'}
    )
    this.setState(
      {service_id: this.props.id}
    )
  }

  handleChangeTimeCome = (time) => {
    let newTime = time.split(' ')
    if(newTime[2] === 'pm')
      newTime[0] = (parseInt(newTime[0])+12).toString()
    newTime.pop()
    this.time = `${newTime[0]}:${newTime[1]}`
  }

  onChangeDateCome = (date) => {
    this.date = date
  }

  handleChangeTimeGo = (time) => {
    let newTime = time.split(' ')
    if(newTime[2] === 'pm')
      newTime[0] = (parseInt(newTime[0])+12).toString()
    newTime.pop()
    this.time_go =  `${newTime[0]}:${newTime[1]}`
  }

    onChangeDateGo = (date) => {
      this.date_go = date
    }

  onChangeNote = (note) => {
    this.note = note
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

  handleCancelAlert = () => {
    let alert = document.getElementById('alert')
    let form = document.getElementById(this.props.id)
    alert.classList.add('d-none')
    form.classList.add('d-none')
  }

  handleConfirmAlert = (id, isConfirm) =>{
    document.getElementById(id).classList.add('d-none');

    let count = this.state.alert.count
    const {date, date_go} = this.state.order
    if(date==='' || date_go===''){
      let alert = {
        addClass:'d-none',
        count: count + 1,
        isConfirm: isConfirm
      }
      this.setState({alert: alert})
    }else if(!this.state.order.user_id){
      this.props.history.push('/Login')
    }
    if(isConfirm === false){
      let alert = {
        addClass:'d-none',
        count: count + 1,
        isConfirm: true
      }
      this.setState({alert: alert})
      //call API here
      this.callAPI(count)
      this.resetAlert()
      this.props.onCloseForm(this.props.id)
      
    }
    
  }

  callAPI = (count) => {
    axios.post('https://dichvuthucung.herokuapp.com', this.state.order).then(resp => {
        let message = resp.data.message
        if(message.length !== 0) {
          let alert = {
            addClass:'',
            count: count + 1,
            content: message,
            titleButtonConfirm: 'Ok Nha',
            titleButtonCancel: 'Không Đặt Nữa',
            titleAlert:'Thông Báo',
            isConfirm: false
          }
        this.setState({alert: alert})
      }
    });
  }

  onSubmitForm = () => {
    let order = {
      service_id: this.props.id,
      user_id: this.user_id,
      date: this.date,
      time: this.time,
      date_go: this.date_go,
      time_go: this.time_go,
      note: this.note
    }
    this.setState({order: order})

    let count = this.state.alert.count
    if(this.date==='' || this.date_go===''){
      console.log('date: ', this.date, 'date go: ', this.date_go);
      let alert = {
        content:'Không được đâu bạn ơi, bạn phải điền đủ thông tin',
        to: '',
        titleButtonConfirm: 'Ok Nha',
        titleButtonCancel: 'Không Đặt Nữa',
        titleAlert:'Thông Báo',
        addClass:'',
        count: count + 1
      }
      this.setState({alert: alert})
    }
    else if(!this.state.alert.isConfirm){
      let alert = {
        content:'Hãy xác nhận thông tin của bạn là chính xác nhaaaa',
        to: '',
        titleButtonConfirm: 'Ok Nha',
        titleButtonCancel: 'Không Đặt Nữa',
        titleAlert:'Thông Báo',
        addClass:'',
        count: count + 1,
        isConfirm: false
      }
      this.setState({alert: alert})
    }
  }

  resetAlert() {
    let count = this.state.alert.count
    let alert = {
      addClass:'d-none',
      count: count + 1,
      isConfirm: false
    }
    this.setState({alert: alert})
  }

  onCloseForm = () => {
    this.props.onCloseForm(this.props.id)
    this.resetAlert()
  }


  render() {
    const {title, id, history} = this.props;
    const { titleAlert, titleButtonCancel, to, titleButtonConfirm, content, addClass, count, isConfirm} = this.state.alert;
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
        <Alert
            key={count}
            titleAlert={titleAlert}
            titleButtonCancel={titleButtonCancel}
            titleButtonConfirm={titleButtonConfirm}
            content={content}
            formID={id}
            addClass={addClass}
            history={history}
            handleConfirmAlert={this.handleConfirmAlert}
            isConfirm={isConfirm}
            handleCancelAlert={this.handleCancelAlert}
          />
      </div>
    );
  }
}

export default TakeCareForm;
