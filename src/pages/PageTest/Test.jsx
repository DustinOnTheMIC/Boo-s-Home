import React, { Component } from 'react';
import OneInputBox from './../../components/InputBox/OneInputBox'
import DatePicker from './../../components/DateTimePicker/DatePicker'
import TimePicker from './../../components/DateTimePicker/TimePicker'

class Test extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-6 bg-light rounded mt-5 pb-5 ">
                        <h1 className="text-center">Đặt lịch tắm</h1>
                        <DatePicker/>
                        <TimePicker/>
                        <OneInputBox label='Ghi chú'/>
                        <button className="btn btn-primary mt-5 mx-3 float-right">Xác Nhận</button>
                        <button className="btn btn-primary mt-5 mx-3 float-right">Hủy</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;