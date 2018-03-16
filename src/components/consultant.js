/**
 * Created by oxchain on 2017/9/1.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class Consultant extends Component{
    renderrow(item,index){
        return (
            <div className="col-lg-4 g-px-40 g-mb-50 g-mb-0--lg" key={index}>
                <div className="text-center">
                            <span className="d-inline-block  u-icon-size--xl rounded-circle g-mb-30">
                              <img className="imgborder g-width-110" style={{height:"115px"}} src={item.src} alt=""/>
                            </span>
                    <h3 className="h5 g-color-gray-dark-v2 g-font-weight-600 g-font-size-16  mb-3">{item.name}</h3>
                    <p className="mb-0 text-left g-font-size-12">{item.info}</p>
                </div>
            </div>
        )
    }
    render(){
        const consultantlist = [
            {src:`${ROOT_URL}public/img/hankao.jpg`,name:`${getLocalValue("ourteam_section11_name")}`,info:`${getLocalValue("ourteam_section11_desc")}`},
            {src:`${ROOT_URL}public/img/DanieleBernardi.jpg`,name:`${getLocalValue("ourteam_section2_name")}`,info:`${getLocalValue("ourteam_section2_desc")}`},
            // {src:`${ROOT_URL}public/img/RobertFerguson.jpg`,name:`${getLocalValue("ourteam_section3_name")}`,info:`${getLocalValue("ourteam_section3_desc")}`},
            {src:`${ROOT_URL}public/img/chenzhong.png`,name:`${getLocalValue("ourteam_section4_name")}`,info:`${getLocalValue("ourteam_section4_desc")}`},
            //{src:`${ROOT_URL}public/img/yushui.png`,name:`${getLocalValue("ourteam_section5_name")}`,info:`${getLocalValue("ourteam_section5_desc")}`},
            // {src: `${ROOT_URL}public/img/lvxujun.jpg`, name: `${getLocalValue("ourteam_section5_name")}`, info: `${getLocalValue("ourteam_section5_desc")}`},
            {src:`${ROOT_URL}public/img/Gong Hui.jpg`,name:`${getLocalValue("ourteam_section6_name")}`,info:`${getLocalValue("ourteam_section6_desc")}`},
            {src:`${ROOT_URL}public/img/guanzhi.jpg`,name:`${getLocalValue("ourteam_section7_name")}`,info:`${getLocalValue("ourteam_section7_desc")}`},
            // {src:`${ROOT_URL}public/img/xinwei.jpg`,name:`${getLocalValue("ourteam_section8_name")}`,info:`${getLocalValue("ourteam_section8_desc")}`},
            {src:`${ROOT_URL}public/img/sunzhiyong.jpg`,name:`${getLocalValue("ourteam_section9_name")}`,info:`${getLocalValue("ourteam_section9_desc")}`},
            {src:`${ROOT_URL}public/img/tangcong.jpg`,name:`${getLocalValue("ourteam_section10_name")}`,info:`${getLocalValue("ourteam_section10_desc")}`},
            // {src:`${ROOT_URL}public/img/Danish A.Alvi.png`,name:`${getLocalValue("ourteam_section12_name")}`,info:`${getLocalValue("ourteam_section12_desc")}`},
            {src:`${ROOT_URL}public/img/Genevieve Leveille.png`,name:`${getLocalValue("ourteam_section13_name")}`,info:`${getLocalValue("ourteam_section13_desc")}`},
            {src:`${ROOT_URL}public/img/Marina Khawaja.png`,name:`${getLocalValue("ourteam_section14_name")}`,info:`${getLocalValue("ourteam_section14_desc")}`},

            {src:`${getLocalValue("ourteam_section15_pic")}`,name:`${getLocalValue("ourteam_section15_name")}`,info:`${getLocalValue("ourteam_section15_desc")}`},
            {src:`${getLocalValue("ourteam_section16_pic")}`,name:`${getLocalValue("ourteam_section16_name")}`,info:`${getLocalValue("ourteam_section16_desc")}`},
            {src:`${getLocalValue("ourteam_section17_pic")}`,name:`${getLocalValue("ourteam_section17_name")}`,info:`${getLocalValue("ourteam_section17_desc")}`},
        ];
        return(
            <section className="g-py-50 g-pb-100">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("ourteam_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                </div>
                <div className="container">
                    <div className="row no-gutters">
                        {consultantlist.map(this.renderrow)}
                    </div>
                </div>
            </section>
        )
    }
}
export default  Consultant;
