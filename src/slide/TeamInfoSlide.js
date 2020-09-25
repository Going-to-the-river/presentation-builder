import React, {Component} from 'react';
import './Slide.css';
import {TeamMemberInfo} from "./TeamMemberInfo";

export class TeamInfoSlide extends Component{
    render() {
        return (
            <li className="team-info-slide" id={this.props.slideId}>
                <ul className="team-members-list">
                    {this.props.slideData.map(data => {
                        return (
                            <TeamMemberInfo
                                memberName={data.memberName}
                                memberPosition={data.memberPosition}
                                memberAbout={data.memberAbout}
                            />
                        );
                    })}
                </ul>
            </li>
        );
    }
}
