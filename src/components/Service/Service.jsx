import React, { Component } from 'react';
import './CssService.css';
import OneButton from './OneButton/OneButton'
import OneService from './OneService/OneService'
import {Link} from 'react-router-dom'
import NormalFormm from './NormalForm/NormalForm'
import TakeCareForm from './TakeCareForm/TakeCareForm'


class Service extends Component {


    constructor(props) {
        super(props)
        this.state = {
            id: '',
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

    onSubmit = (value) => {
        console.log(value);
    }

    onCloseForm = (id) => {
        console.log(id);
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
        const conditioner = <p>Làm sạch lông của chó mèo thông qua việc sử dụng dầu xả chuyên biệt
            . Giúp lông mượt hơn, sạch hơn và tạo độ phồng tốt hơn</p>
        return (
            <div id='service' className="col-12 justify-content-center">
                <div className="container-fluid col-11 col-md-9" style={{zIndex:'10', color:'white', position:'relative'}}>
                    <div className="justify-content-center col-12 container-fluid">
                        <OneButton id="button1" onClick={()=> this.handleActive('div1','button1')} title="TẮM" control="div1" target="#div1"/>
                        <OneButton id="button2" onClick={()=> this.handleActive('div2','button2')} title="KHÁM CHỮA BỆNH" control="div2" target="#div2"/>
                        <OneButton id="button3" onClick={()=> this.handleActive('div3','button3')} title="TRÔNG COI" control="div3" target="#div3"/>
                        <OneButton id="button4" onClick={()=> this.handleActive('div4','button4')} title="TƯ VẤN" control="div4" target="#div4"/>
                    </div>
                    <div className="justify-content-center container-fluid">
                        <div id="div1" className="collapse col-sm-12 justify-content-center show row text-dark bg-light mx-0">
                            <OneService title="Tắm Rửa Chó Mèo" price="200.000đ" onClickService={this.onShowForm} formControl='formShower' content={shower}/>
                            <OneService title="Tỉa Lông" price="100.000đ" onClickService={this.onShowForm} formControl='formHealth' content={trim}/>
                            <OneService title="Vệ Sinh Tuyến Mồ Hôi" price="+50%" onClickService={this.onShowForm} formControl='formAdvisory' content={specialClean}/>
                            <OneService title="Xả lông" price="100.000đ" onClickService={this.onShowForm} formControl='btnFormShower' content={conditioner}/>
                        </div>
                        <div id="div2" className="collapse col-sm-12 justify-content-center show row text-dark bg-light mx-0">
                            <OneService title="Khám Tổng Quát" formControl='formHealth' onClickService={this.onShowForm} price="100.000đ" content={trim}/>
                            <OneService title="Tiểu Phẫu" formControl='formHealth' price="100.000đ" content={conditioner}/>
                        </div>
                        <div id="div3" className="collapse col-sm-12 justify-content-center show row text-dark bg-light mx-0">
                            <OneService title="SS-CLEAN" price="200.000đ" content={shower}/>
                            <OneService title="Normal Clean" price="100.000đ" content={trim}/>
                        </div>
                        <div id="div4" className="collapse col-sm-12 justify-content-center show row text-dark bg-light mx-0">
                            <OneService title="24h Clean" price="+50%" content={specialClean}/>
                            <OneService title="Now Clean" price="100.000đ" content={conditioner}/>
                        </div>
                    </div>
                </div>
                <NormalFormm id='formShower' title='Đặt lịch Tắm' onCloseForm={this.onCloseForm} onSubmit = {this.onSubmit}/> 
                <TakeCareForm id='formHealth' title='Đặt lịch Khám' onCloseForm={this.onCloseForm}/>
                <NormalFormm id='formAdvisory' title='Đặt lịch Tư Vấn' onCloseForm={this.onCloseForm}/>
            </div>
        );
    }
}

export default Service;