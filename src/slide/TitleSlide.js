import React, {Component} from 'react';
import './Slide.css';

export class TitleSlide extends Component{
    render() {
        return (
            <li className="title-slide">
                <h1>{this.props.slideData.projectName}</h1>
                <p>{this.props.slideData.projectEmail}</p>
                <p>{this.props.slideData.projectPhone}</p>
            </li>
        );
    }
}
