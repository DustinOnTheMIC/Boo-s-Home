import React, { Component } from "react";
import OneInputBox from "./../../../components/InputBox/OneInputBox";
import DatePicker from "./../../../components/DateTimePicker/DatePicker";
import TimePicker from "./../../../components/DateTimePicker/TimePicker";
import { Redirect } from "react-router-dom";
import Alert from './../../../components/Alert/Alert'
import axios from 'axios';


class NormalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: {
        service_id: this.props.id,
      },
      alert: {
        addClass:'d-none',
        count: 1
      }
    }
  }

  date = ''
  time = '8:0'
  note = ''
  service_id = ''
  user_id = ''

  componentDidMount = () =>{
    // this.user_id = localStorage.getItem('token')
    this.user_id = 'ádasdasd'
    this.service_id = this.props.id
  }

  handleChangeTime = (time) => {
    let newTime = time.split(' ')
    if(newTime[2] === 'pm')
      newTime[0] = (parseInt(newTime[0])+12).toString()
    newTime.pop()
    this.time = `${newTime[0]}:${newTime[1]}`
  }

  onChangeDate = (date) => {
    this.date = date
  }

  onChangeNote = (note) => {
    this.note = note
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    let order = {
      service_id: this.props.id,
      user_id: this.user_id,
      date: this.date,
      time: this.time,
      date_go: '',
      time_go: '',
      note: this.note
    }

    this.setState({order: order})

    setTimeout(() => {
      const {time, date} = this.state.order
      let count = this.state.alert.count
      if(time==='' || date===''){
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
      }else if(!this.state.order.user_id){
        let alert = {
          content:'Không được đâu bạn ơi, bạn phải đăng nhập trước khi đặt lịch nha',
          to: '/Login',
          titleButtonConfirm: 'Ok Nha',
          titleButtonCancel: 'Không Đặt Nữa',
          titleAlert:'Thông Báo',
          addClass:'',
          count: count + 1
        }
        this.setState({alert: alert})
      }else if(!this.state.alert.isConfirm){
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
      
    }, 10);
  }

  handleConfirmAlert = (id, isConfirm) => {
    document.getElementById(id).classList.add('d-none');

    let count = this.state.alert.count
    const {time, date} = this.state.order
    if(time==='' || date===''){
      let alert = {
        addClass:'d-none',
        count: count + 1
      }
      this.setState({alert: alert})
    }else if(!this.state.order.user_id){
      this.props.history.push('/Login')
    }
    if(isConfirm===false){
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

  handleCancelAlert = () => {
    let alert = document.getElementById('alert')
    let form = document.getElementById(this.props.id)
    alert.classList.add('d-none')
    form.classList.add('d-none')
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
            isConfirm: false,
          }
        this.setState({alert: alert})
      }
    })
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
            <DatePicker id={`DatePicker${id}`} onChangeDate={this.onChangeDate} />
            <TimePicker id={`TimePicker${id}`} handleChange={this.handleChangeTime} />
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

export default NormalForm;
