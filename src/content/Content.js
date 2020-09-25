import React, {Component} from 'react';

import Slide from "../slide/Slide";
import {TitleSlide} from "../slide/TitleSlide";
import {TeamInfoSlide} from "../slide/TeamInfoSlide";

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
          <ul className="slides">
              <TitleSlide slideData={this.props.titleSlideData}/>
              <TeamInfoSlide slideData={this.props.teamSlideData}/>

          </ul>
        );
    }
}