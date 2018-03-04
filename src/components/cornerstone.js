import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
// import LazyLoad from 'react-lazyload';
// import LazyLoad from 'react-lazy-load';
class Cornerstone extends Component{
    renderrow(item,index){
        return (
            <div className="col-lg-12 g-px-40 g-mb-50 g-mb-0--lg" key={index}>
                <div className="text-center g-pt-10">
                            <span className="d-inline-block  u-icon-size--xl rounded-circle g-mb-30">

                            {/*<LazyLoad height={"100%"} width={"100%"}>*/}
                                <img className="imgborder g-width-110" style={{height:"115px", boxShadow: "0 0 20px #ffffff"}} src={item.src} alt="" />
                            {/*</LazyLoad>*/}
                            </span>
                    <h3 className="h5 g-font-weight-600 g-font-size-18 text-uppercase mb-3 g-color-white" style={{marginTop: "20px"}}>{item.name}</h3>
                    <h3 className="h5 g-font-weight-600 g-font-size-16 text-uppercase mb-3" style={{color: "#ffc133"}}>{item.desc1}</h3>
                    <h3 className="h5 g-font-weight-600 g-font-size-16 text-uppercase mb-3" style={{color: "#ffc133"}}>{item.desc2}</h3>
                    <h3 className="h5 g-font-weight-600 g-font-size-16 text-uppercase mb-3" style={{color: "#ffc133"}}>{item.desc3}</h3>
                    <p style={{color: "#fff"}}>{item.p}</p>
                </div>
            </div>
        )
    }
    render(){
        const consultantlist = [
            {
                src:`${ROOT_URL}/public/img/shenbo.png`,
                p:getLocalValue("cornerstone_section1_p"),
                name:getLocalValue("cornerstone_section1_name"),
                desc1:getLocalValue("cornerstone_section1_desc1"),
                desc2:getLocalValue("cornerstone_section1_desc2"),
                desc3:getLocalValue("cornerstone_section1_desc3"),
            }
        ];
        return(
            <section className="g-py-50 g-pb-100" id="cornerstone">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white">{getLocalValue("cornerstone_title")}</h2>
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
export default Cornerstone;