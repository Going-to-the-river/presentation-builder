import React, {Component} from 'react';
import './Slide.css';

export class TeamMemberInfo extends Component{
    render() {
        return (
            <li>
                <p>{this.props.memberName}</p>
                <p>{this.props.memberPosition}</p>
                <p>{this.props.memberAbout}</p>
            </li>
        );
    }
}
