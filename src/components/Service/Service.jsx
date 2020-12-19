import React, { Component } from 'react';
import './CssService.css';
import OneButton from './OneButton/OneButton'
import OneService from './OneService/OneService'
import NormalFormm from './NormalForm/NormalForm'
import TakeCareForm from './TakeCareForm/TakeCareForm'


class Service extends Component {


    constructor(props) {
        super(props)
        this.state = {
            id: localStorage.getItem('idAccount'),
            Services: []
        }
    }

    handleActive = (activeDiv,activeBtn) => { 
        for(let i = 1; i<=4; i++){ 
            let div = 'div' + i
            let btn = 'button'+ i
            if(div !== activeDiv){
                //remove class 'show' from all div not active 
                document.getElementById(div).classList.remove('show')
            }
            if(btn !== activeBtn){  
               //remove class 'bg-brown','text-light' from button not active
            document.getElementById(btn).classList.remove('bg-brown','text-light') 
            }
        }
        //add class 'bg-brown','text-light' to button active
        document.getElementById(activeBtn).classList.add('bg-brown','text-light')
    }

    componentDidMount () {
        this.handleActive('div1','button1')
    }

    onShowForm = (formControl) => {
        document.getElementById(formControl).classList.remove('d-none');
    }

    onSubmitForm = (value) => {
        console.log(value);
    }

    onCloseForm = (id) => {
        document.getElementById(`${id}`).classList.add('d-none');
    }

    render() {
        const shower = <p>Với quy trình tắm khử mùi hôi, dưỡng dầu xả mềm mượt,
            vệ sinh tai, sấy và chải lông, cắt mài móng, gỡ rối và chải lông rụng
            của chúng tôi sẽ làm cho vật nuôi của các bạn sạch sẽ, thơm tho hơn</p>
        const trim = <p>Với quy trình chải lông, cắt tỉa lông, tạo kiểu theo yêu cầu,nhổ lông tai, 
            làm móng, tắm cho chó mèo, vệ sinh tai, sấy lông, nhỏ thuốc trị rận,
            trị ghẻ nếu có chắc chắn các bạn sẽ hài lòng</p>
        const specialClean = <p>Bạn thắc mắc rằng tại sao thú cưng có mùi hôi khó chịu
            trong khi bạn đã tắm cho bé rất thường xuyên và hơn thế còn sử dụng những
            loại sữa tắm đắt tiền được quảng cáo là lưu hương lâu? Câu trả lời của 
            bạn đang nằm ở TUYẾN HÔI của chó mèo.</p>
        const conditioner = <p>Làm sạch lông của chó mèo thông qua việc sử dụng dầu xả chuyên biệt. 
            Giúp lông mượt hơn, sạch hơn và tạo độ phồng tốt hơn</p>
        const physicalTest = <p>Thú cưng có tuổi thọ trung bình từ 10-15 năm, nhưng nếu bạn không có 
            phương pháp chăm sóc sức khỏe khoa học như việc thăm khám định 
            kỳ sẽ khiến tuổi thọ của thú cưng bị giảm xuống, thậm chí có vật nuôi chỉ sống được vài tháng, 
            vài năm chỉ vì bạn không sớm phát hiện bệnh của chúng.</p>
        
    return(
        <div id='service' className="col-12 justify-content-center">
            <div className="container-fluid col-11 col-md-9" style={{zIndex:'10', color:'white', position:'relative'}}>
                <div className="justify-content-center col-12 container-fluid">
                    <OneButton id="button1" onClick={()=> this.handleActive('div1','button1')} title="Vệ Sinh" control="div1" target="#div1"/>
                    <OneButton id="button2" onClick={()=> this.handleActive('div2','button2')} title="KHÁM CHỮA BỆNH" control="div2" target="#div2"/>
                    <OneButton id="button3" onClick={()=> this.handleActive('div3','button3')} title="TRÔNG COI" control="div3" target="#div3"/>
                    <OneButton id="button4" onClick={()=> this.handleActive('div4','button4')} title="TƯ VẤN" control="div4" target="#div4"/>
                </div>
                <div className="justify-content-center container-fluid">
                    <div id="div1" className="collapse col-sm-12 justify-content-center show row text-dark bg-light mx-0">
                        <OneService title="Tắm Rửa Chó Mèo" price="200.000đ" onClickService={this.onShowForm} formControl='formShower' content={shower}/>
                        <OneService title="Tỉa Lông" price="100.000đ" onClickService={this.onShowForm} formControl='formTrim' content={trim}/>
                        <OneService title="Vệ Sinh Tuyến Mồ Hôi" price="+50%" onClickService={this.onShowForm} formControl='formSpecialClean' content={specialClean}/>
                        <OneService title="Xả lông" price="100.000đ" onClickService={this.onShowForm} formControl='formConditioner' content={conditioner}/>
                    </div>
                    <div id="div2" className="collapse col-sm-12 justify-content-center show row text-dark bg-light mx-0">
                        <OneService title="Khám Tổng Quát" formControl='formAdvisory' onClickService={this.onShowForm} price="100.000đ" content={physicalTest}/>
                        <OneService title="Tiểu Phẫu" formControl='formPhysicalTest' onClickService={this.onShowForm} price="100.000đ" content={conditioner}/>
                    </div>
                    <div id="div3" className="collapse col-sm-12 justify-content-center show row text-dark bg-light mx-0">
                        <OneService title="Trong Ngày" formControl='formTakeCareDay' onClickService={this.onShowForm} price="100.000đ" content={shower}/>
                        <OneService title="Nhiều ngày" formControl='formTakeCareManyDay' onClickService={this.onShowForm} price="+ 50%" content={trim}/>
                    </div>
                    <div id="div4" className="collapse col-sm-12 justify-content-center show row text-dark bg-light mx-0">
                        <OneService title="Trong Ngày" formControl='formHealth' onClickService={this.onShowForm} price="100.000đ" content={specialClean}/>
                        <OneService title="Nhiều ngày" formControl='formHealth' onClickService={this.onShowForm} price="+50%" content={conditioner}/>
                    </div>
                </div>
            </div>
            <NormalFormm id='formShower' title='Đặt Lịch Tắm' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/> 
            <NormalFormm id='formTrim' title='Đặt Lịch Tỉa Lông' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
            <NormalFormm id='formSpecialClean' title='Đặt Lịch Special Clean' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
            <NormalFormm id='formConditioner' title='Đặt Lịch Xả Lông' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
            <NormalFormm id='formAdvisory' title='Khám Tổng Quát' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
            <NormalFormm id='formPhysicalTest' title='Tiểu Phẩu' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
            <TakeCareForm id='formTakeCareDay' title='Trông Coi Trong Ngày' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
            <TakeCareForm id='formTakeCareManyDay' title='Trông Coi Nhiều Ngày' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
            <NormalFormm id='formAdvisory' title='Tiểu Phẩu' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
            <NormalFormm id='formAdvisory' title='Tiểu Phẩu' onCloseForm={this.onCloseForm} onSubmit={this.onSubmitForm}/>
        </div>);
    }
}

export default Service;