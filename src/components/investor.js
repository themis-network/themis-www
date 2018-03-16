/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {getLocalValue} from './common/language';
import {ROOT_URL} from '../actions/types';

class Investor extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section className="investor g-pt-100 g-pb-100" style={{"background":"#fff"}}>
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("investor_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                </div>
                <div className="container">
                    <div className="row">
                        {/*<div className=" col-sm-12 col-lg-4 g-py-20 text-center">*/}
                            {/*<img style={{margin:"0 auto"}} src={`${ROOT_URL}/public/img/investor91.png`} alt="1"/>*/}
                        {/*</div>*/}
                        <div className="col-sm-12 col-lg-4 g-py-20 text-center">
                            <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/investor92.png`} alt="2"/>
                        </div>
                        <div className="ol-sm-12 col-lg-4 g-py-20 text-center" style={{margin:"auto"}}>
                            <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/investor3_1.png`} alt="3"/>
                        </div>
                        <div className="ol-sm-12 col-lg-4 g-py-20 text-center">
                            <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/investor94.png`} alt="4"/>
                        </div>
                        <div className="ol-sm-12 col-lg-4 g-py-20 text-center">
                            <img style={{margin:"auto", height:"115px"}} src={`${ROOT_URL}/public/img/investor95.png`} alt="5"/>
                        </div>
                        <div className="ol-sm-12 col-lg-4 g-py-20 text-center">
                            <img style={{margin:"auto", height:"65px", paddingTop:"20px"}} src={`${ROOT_URL}/public/img/investor97.jpg`} alt="7"/>
                        </div>
                        {/*<div className="ol-sm-12 col-lg-4 g-py-20 text-center">*/}
                            {/*<img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/investor96.png`} alt="6"/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        )
    }
}
export default Investor;