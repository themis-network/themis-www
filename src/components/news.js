import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class News extends Component{

    render(){
        return(
            <section id="news" className="g-pt-20 g-pb-100" style={{backgroundColor:"#f5f5f5"}}>
                <div className="container text-center g-pt-40 " style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 ">{getLocalValue("news_title")}</h2>
                    <div className="nl-underline g-mb-25">
                        <span className="nl-style"></span>
                    </div>
                </div>
                <div className="container px-0">
                    <div className="shortcode-html">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row g-mx-5--sm g-mb-30">
                                    <div className="col-sm-5 g-px-0--sm">
                                        <div className="g-height-200 g-bg-size-cover" style={{backgroundImage:`url(${ROOT_URL}/public/img/news1.jpg)`,backgroundPosition: "10%"}}></div>
                                    </div>
                                    <div className="col-sm-7 g-px-0--sm">
                                        <div className="u-info-v1-1 g-height-200 g-bg-gray-light-v5 g-bg-gray-light-gradient-v1--after g-pa-20-30-0">
                                            <h3 className="h6 g-font-weight-600 text-uppercase">
                                                <a className="u-link-v5 g-color-black nl-color-yellow--hover" href="http://www.jinse.com/news/blockchain/132222.html">{getLocalValue("news_section1_title")}</a>
                                            </h3>
                                            <p className="small nl-color-yellow">
                                                <time>{getLocalValue("news_section1_time")}</time>
                                            </p>
                                            <p className="g-font-size-12">{getLocalValue("news_section1_content")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="row g-mx-5--sm g-mb-30">
                                    <div className="col-sm-5 g-px-0--sm">
                                        <div className="g-height-200 g-bg-size-cover" style={{backgroundImage:`url(${ROOT_URL}/public/img/news2.jpg)`}}></div>
                                    </div>
                                    <div className="col-sm-7 g-px-0--sm">
                                        <div className="u-info-v1-1 g-height-200 g-bg-gray-light-v5 g-bg-gray-light-gradient-v1--after g-pa-20-30-0">
                                            <h3 className="h6 g-font-weight-600 text-uppercase">
                                                <a className="u-link-v5 g-color-black nl-color-yellow--hover" href="http://www.jinse.com/news/blockchain/133195.html">{getLocalValue("news_section2_title")}</a>
                                            </h3>
                                            <p className="small nl-color-yellow">
                                                <time>{getLocalValue("news_section2_time")}</time>
                                            </p>

                                            <p className="g-font-size-12">{getLocalValue("news_section2_content")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  News;

