import React, {Component} from 'react';
import './Slide.css';
import logo from "./logo2018.png";
import {TeamMemberInfo} from "./TeamMemberInfo";

export class Slide extends Component{
    render() {
        return (
        <div className="Slide" id={this.props.slideId}>
            {/*<div className="TeamTitle">{this.props.teamName}</div>*/}
            <img className="Logo_sol" src={logo} />
            <div className="message"><h1>{this.props.title}</h1></div>
            <div className="body"><h1>{this.props.title}</h1></div>
        </div>
        );

    }
}

export default Slide;
