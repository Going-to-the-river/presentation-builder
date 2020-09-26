import React, {Component} from 'react';
import './Slide.css';
import logo from "./logo2018.png"

export class TitleSlide extends Component{
    constructor(props) {
        super(props);

        this.getProjectName = this.getProjectName.bind(this);
        this.getProjectTeamName = this.getProjectTeamName.bind(this);
        this.getProjectEmail = this.getProjectEmail.bind(this);
        this.getProjectPhone = this.getProjectPhone.bind(this);
    }

    getProjectName() {
        if (this.props.slideData.projectName.length === 0) {
            return "Название проекта"
        } else {
            return this.props.slideData.projectName
        }
    }

    getProjectTeamName() {
        if (this.props.slideData.projectTeamName.length === 0) {
            return "Название команды"
        } else {
            return this.props.slideData.projectTeamName
        }
    }

    getProjectEmail() {
        if (this.props.slideData.projectEmail.length === 0) {
            return "Email"
        } else {
            return this.props.slideData.projectEmail
        }
    }

    getProjectPhone() {
        if (this.props.slideData.projectPhone.length === 0) {
            return "Телефон"
        } else {
            return this.props.slideData.projectPhone
        }
    }

    render() {
        return (
            <div className="Slide title-slide">
                <img src={logo} className="Logo_Titul" />
                <div className="Title"><h1>{this.getProjectName()}</h1></div>
                <div className="TeamName">{this.getProjectTeamName()}</div>
                <div className="LeadMail">{this.getProjectEmail()}</div>
                <div className="LeadPhone">{this.getProjectPhone()}</div>
            </div>
        );
    }
}

// <body>
// <div class="Slide">

// </div>
// </body>
// </html>