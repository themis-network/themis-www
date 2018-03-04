/**
 * Created by oxchain on 2017/8/31.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class Ourteams extends Component {
    constructor(props) {
        super(props);
        this.renderrow = this.renderrow.bind(this);
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of HSScrollNav
        $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
            duration: 700,
            easing: 'easeOutExpo'
        });
    }
    renderrow(src, index) {
        return (
            <div className="col-6 col-lg-3 g-px-25 g-mb-50" key={index}>
                <div className="text-center">
                    <img className="u-shadow-v29 g-width-110  rounded-circle mb-5" style={{height: '110px'}}
                         src={src.src} alt="Image Description"/>
                    {/*<div style={{backgroundColor:"ffc133", width:"100px", height:"1px"}}></div>*/}
                    <h4 className="h5 g-font-weight-600 mb-1" style={{borderBottom:"1px solid #ffc133"}}>{src.name}
                        <a className="nav-link nl-nav-link g-px-10" href={src.linkedin} target="_blank" style={{display:"inline-block"}}><i className="fa fa-linkedin-square" aria-hidden="true" style={{color:"#6c6c6c"}}></i></a>
                    </h4>
                    <h5 className=" g-font-weight-600 mb-1" style={{color:"#ffc133", paddingTop:"10px", paddingBottom:"10px", fontSize:"1.2em"}}>{src.p}</h5>
                    <span className="d-block text-left ">{src.info}</span>
                </div>
            </div>
        )
    }
    render() {
        const imgLinks = [
            {
                src: `${ROOT_URL}public/img/Hongwei Meng.png`,
                name: `${getLocalValue("team_section1_name")}`,
                p: `${getLocalValue("team_section1_place")}`,
                info: `${getLocalValue("team_section1_desc")}`,
                linkedin:"http://www.linkedin.com/in/hongwei-meng-668422108/"
            },
            {
                src: `${ROOT_URL}public/img/Alex Khawaja.png`,
                name: `${getLocalValue("team_section2_name")}`,
                p: `${getLocalValue("team_section2_place")}`,
                info: `${getLocalValue("team_section2_desc")}`,
                linkedin:"https://www.linkedin.com/in/alexkhawaja/"
            },
            {
                src: `${ROOT_URL}public/img/Ennan Zhai.png`,
                name: `${getLocalValue("team_section3_name")}`,
                p: `${getLocalValue("team_section3_place")}`,
                info: `${getLocalValue("team_section3_desc")}`,
                linkedin:"https://www.linkedin.com/in/ennan-zhai-26818b17/"
            },
            {
                src: `${ROOT_URL}public/img/Yuet Ning Chau.png`,
                name: `${getLocalValue("team_section4_name")}`,
                p: `${getLocalValue("team_section4_place")}`,
                info: `${getLocalValue("team_section4_desc")}`,
                linkedin:"https://www.linkedin.com/in/yuet-ning-chau"
            },
            {
                src: `${ROOT_URL}public/img/Wei Xin.jpg`,
                name: `${getLocalValue("team_section5_name")}`,
                p: `${getLocalValue("team_section5_place")}`,
                info: `${getLocalValue("team_section5_desc")}`,
                linkedin:"javascript:(0);"
            },
            {
                src: `${ROOT_URL}public/img/Takuya Koide.jpg`,
                name: `${getLocalValue("team_section6_name")}`,
                p: `${getLocalValue("team_section6_place")}`,
                info: `${getLocalValue("team_section6_desc")}`,
                linkedin:"https://uk.linkedin.com/in/takuya-koide-24b3a8124"
            },
            {
                src: `${ROOT_URL}public/img/Amir Marat.png`,
                name: `${getLocalValue("team_section7_name")}`,
                p: `${getLocalValue("team_section7_place")}`,
                info: `${getLocalValue("team_section7_desc")}`,
                linkedin:"https://www.linkedin.com/in/amirmarat/"
            },
            {
                src: `${ROOT_URL}public/img/James Johnson.jpg`,
                name: `${getLocalValue("team_section8_name")}`,
                p: `${getLocalValue("team_section8_place")}`,
                info: `${getLocalValue("team_section8_desc")}`,
                linkedin:"https://www.linkedin.com/in/jameshenryjohnson/"
            },
            {
                src: `${ROOT_URL}public/img/EvanBian.jpg`,
                name: `${getLocalValue("team_section9_name")}`,
                p: `${getLocalValue("team_section9_place")}`,
                info: `${getLocalValue("team_section9_desc")}`,
                linkedin:"http://www.linkedin.com/in/%E4%B8%80%E5%A4%AB-%E8%BE%B9-2073b9155/"
            },
            {
                src: `${ROOT_URL}public/img/Hubertas Trinkunas.jpg`,
                name: `${getLocalValue("team_section10_name")}`,
                p: `${getLocalValue("team_section10_place")}`,
                info: `${getLocalValue("team_section10_desc")}`,
                linkedin:"https://www.linkedin.com/in/hubertas-trinkunas-119898128/"
            },
            {
                src: `${ROOT_URL}public/img/emmazhu.jpg`,
                name: `${getLocalValue("team_section11_name")}`,
                p: `${getLocalValue("team_section11_place")}`,
                info: `${getLocalValue("team_section11_desc")}`,
                linkedin:"http://www.linkedin.com/in/emma-zhu-034b12159/"
            },
            // {
            //     src: `${ROOT_URL}public/img/menghongwei.jpg`,
            //     name: 'Meng Hongwei',
            //     info: `${getLocalValue("team_section12_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/Danish.jpg`,
            //     name: 'Danish A.Alvi',
            //     info: `${getLocalValue("team_section1_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/JenniferChung.jpg`,
            //     name: 'Jennifer Chung',
            //     info: `${getLocalValue("team_section2_desc")}`
            // },
            //
            // {
            //     src: `${ROOT_URL}public/img/ennanzhai.jpg`,
            //     name: 'Ennan Zhai',
            //     info: `${getLocalValue("team_section9_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/xinwei.jpg`,
            //     name: 'Wei Xin',
            //     info: `${getLocalValue("team_section10_desc")}`
            // },
            //
            // {
            //     src: `${ROOT_URL}public/img/TakuyaKoide.jpg`,
            //     name: 'Takuya Koide',
            //     info: `${getLocalValue("team_section3_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/YuetNingChau.jpg`,
            //     name: 'Yuet Ning Chau',
            //     info:`${getLocalValue("team_section4_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/AmiriMarat.jpg`,
            //     name: 'Amir Marat',
            //     info:`${getLocalValue("team_section5_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/JamesJohnson.jpg`,
            //     name: 'James Johnson',
            //     info:`${getLocalValue("team_section6_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/HubertasTrinkunas.jpg`,
            //     name: 'Hubertas Trinkunas',
            //     info: `${getLocalValue("team_section7_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/EvanBian.jpg`,
            //     name: 'Evan Bian',
            //     info: `${getLocalValue("team_section8_desc")}`
            // },
            // {
            //     src: `${ROOT_URL}public/img/emmazhu.jpg`,
            //     name: 'Emma Zhu',
            //     info: `${getLocalValue("team_section11_desc")}`
            // }
        ];
        return (
            <div className="ourteam" id="ourteam" name="ourteam">
                <div className="container g-py-100">
                    <div className="navbar-nav  g-font-weight-600 ml-auto">
                        <div className="" style={{textAlign: 'center'}}>
                            <h2 className="g-font-weight-400 g-font-size-24">{getLocalValue("team_title")}</h2>
                            <div className="nl-underline g-mb-30">
                                <span className="nl-style"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-mx-minus-25 g-mb-40">
                        {imgLinks.map(this.renderrow)}
                    </div>
                </div>
            </div>
        )
    }
}
export default  Ourteams;