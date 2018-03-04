import React,{ Component } from 'react';

import Technology from './technology';
import  Banner from './banner';
import Application from './application';
import Partner from './partner';
import  Advantage from './advantage'
import Ourteams from "./ourteams";
import News from './news';
import Circuit from './circuit'
import Investor from './investor';
import ProjectDescription from './project_description';
import Consultant from './consultant'
import Mission from './mission'
import DigitalCurrency from './digital_currency'
import Cornerstone from "./cornerstone";

import Distribution from "./distribution"

class Home extends Component{
    componentDidMount() {
        this.node.scrollIntoView();
    }
    render(){
        return(
            <section id="about-section" className="g-bg-secondary g-pos-rel" ref={node => this.node = node}>
                <Banner/>
                <DigitalCurrency/>
                <Mission/>
                <Technology/>
                <Application/>
                <Partner/>
                {/*<Advantage/>*/}
                <Circuit/>
                <Cornerstone/>
                <Investor/>
                {/*<ProjectDescription/>*/}
                <News/>
                <Distribution/>
                <Ourteams/>
                <Consultant/>
            </section>
        )
    }
}
export default  Home;
