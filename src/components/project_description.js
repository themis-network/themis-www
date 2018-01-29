/**
 * Created by zhanxiaojing on 2017/12/27.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';

class ProjectDescription extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of HSScrollNav
        $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
            duration: 700,
            easing: 'easeOutExpo'
        });
    }
    render(){
        return(
            <section id="project-description" className="project-description g-pt-100 g-pb-70" style={{"backgroundImage":`url(${ROOT_URL}/public/img/project-description.png)`}}>
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white">{getLocalValue("crowd_funding_title")}</h2>
                    <div className="nl-underline g-mb-50">
                        <span className="nl-style"></span>
                    </div>
                    <div className="g-color-white text-center g-font-size-12 g-mb-20" style={{maxWidth:"890px",margin:"auto"}}>{getLocalValue("crowd_funding_title_tip")}</div>
                </div>
                <div className="container g-mb-50">
                    <div className="row g-font-weight-400" >
                        <div className="col-sm-12">
                            <div className="crowd-section1">
                                <div className="crowd-section2 g-color-white clearfix g-font-size-14">
                                    <div className="table-responsive description-table">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <th><span>{getLocalValue("crowd_funding_section1_name1")}</span></th>
                                                    <th><span>{getLocalValue("crowd_funding_section1_name2")}</span></th>
                                                    <th><span>{getLocalValue("crowd_funding_section1_name3")}</span></th>
                                                    <th><span>{getLocalValue("crowd_funding_section1_name4")}</span></th>
                                                    <th><span>{getLocalValue("crowd_funding_section1_name5")}</span></th>
                                                    <th><span>{getLocalValue("crowd_funding_section1_name6")}</span></th>
                                                    <th><span>{getLocalValue("crowd_funding_section1_name7")}</span></th>
                                                    <th><span style={{"border":"none"}}>{getLocalValue("crowd_funding_section1_name8")}</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span>{getLocalValue("crowd_funding_section1_item1")}</span></td>
                                                    <td><span>{getLocalValue("crowd_funding_section1_item2")}</span></td>
                                                    <td><span>{getLocalValue("crowd_funding_section1_item3")}</span></td>
                                                    <td><span>{getLocalValue("crowd_funding_section1_item4")}</span></td>
                                                    <td><span>{getLocalValue("crowd_funding_section1_item5")}</span></td>
                                                    <td><span>{getLocalValue("crowd_funding_section1_item6")}</span></td>
                                                    <td><span>{getLocalValue("crowd_funding_section1_item7")}</span></td>
                                                    <td><span>{getLocalValue("crowd_funding_section1_item8")}</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="hidden-lg text-center g-pt-30 ">滑动查看更多<img className="g-pl-10" style={{"width":"25px", "verticalAlign": "sub"}} src={`${ROOT_URL}/public/img/slider.png`} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ProjectDescription;