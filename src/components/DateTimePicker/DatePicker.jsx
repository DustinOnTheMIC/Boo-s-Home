import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker(props) {
    const [selectedDate, setSelectedDate] = useState(null)
    let come = 'đi'
    if(props.isCome === true)
        come = 'đến'
    return (
        <div className="col-12 d-flex">
            <h5 className="col-6">Thời gian bạn muốn {come}: </h5>
            <ReactDatePicker
                control = {['time']}
                touchUi={true}
                className="form-text bg-light rounded col-12"
                selected={selectedDate}
                onChange={
                    date => {
                        setSelectedDate(date);
                        props.onChangeDate(`${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`);
                    
                    }
                }
                dateFormat='dd/MM/yyyy'
                minDate = {new Date()}
            />
        </div>
    );

}

export default DatePicker;