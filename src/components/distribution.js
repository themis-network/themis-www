/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {getLocalValue} from './common/language';
import {ROOT_URL} from '../actions/types';

class Distribution extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section className="distribution g-pt-100 g-pb-100" >
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24" style={{color: "#fff"}}>{getLocalValue("distribution_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className={"col-sm-6 text-center dis_color dis_weight"}>{getLocalValue("distribution_name1")}
                            <div className={"col-sm-12 text-center"} style={{paddingTop:"42px"}}><img style={{width:"80%"}} src={getLocalValue("distribution_img1")} alt="1.1"/></div>
                        </div>
                        <div className={"col-sm-6 text-center dis_color dis_weight"}>{getLocalValue("distribution_name2")}
                            <div className={"col-sm-12 text-center"} style={{paddingTop:"100px"}}><img style={{width:"80%"}} src={getLocalValue("distribution_img2")} alt="1.2"/></div>
                        </div>

                        <div className={"col-sm-12 text-center dis_color dis_weight" } style={{paddingTop:"30px"}}>{getLocalValue("distribution_footer")}</div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Distribution;