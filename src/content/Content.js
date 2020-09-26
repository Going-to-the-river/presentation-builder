import React, {Component} from 'react';

import Slide from "../slide/Slide";
import {TitleSlide} from "../slide/TitleSlide";
import {TeamInfoSlide} from "../slide/TeamInfoSlide";
import './Content.css'
import {FinalSlide} from "../slide/FinalSlide";

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
          <div id="content">
              <TitleSlide slideData={this.props.titleSlideData}/>
              <TeamInfoSlide slideData={this.props.teamSlideData} teamName={this.props.teamSlideData.projectTeamName}/>
              {this.props.slides.map(slideId => {
                  return <Slide slideId={slideId}/>
              })}
              <FinalSlide slideData={this.props.titleSlideData} />
          </div>
        );
    }
}