import React, {Component} from 'react';
import './Slide.css';

export class TeamMemberInfo extends Component{
    constructor(props) {
        super(props);

        this.getMemberName = this.getMemberName.bind(this);
        this.getMemberPosition = this.getMemberPosition.bind(this);
        this.getMemberEducation = this.getMemberEducation.bind(this);
        this.getMemberAbout = this.getMemberAbout.bind(this);
        this.getMemberPhoto = this.getMemberPhoto.bind(this);
    }

    getMemberName() {
        if (this.props.memberName === undefined || this.props.memberName.length === 0) {
            return "Имя Фамилия"
        } else {
            return this.props.memberName
        }
    }

    getMemberPosition() {
        if (this.props.memberPosition === undefined || this.props.memberPosition.length === 0) {
            return "Должность"
        } else {
            return this.props.memberPosition
        }
    }

    getMemberEducation() {
        if (this.props.memberEducation === undefined || this.props.memberEducation.length === 0) {
            return "Образование"
        } else {
            return this.props.memberEducation
        }
    }

    getMemberAbout() {
        if (this.props.memberAbout === undefined || this.props.memberAbout.length === 0) {
            return "Доп. Информация"
        } else {
            return this.props.memberAbout
        }
    }

    getMemberPhoto() {
        if (this.props.memberPhoto === undefined || this.props.memberPhoto === '') {
            return ""
        } else {
            return this.props.memberPhoto
        }
    }

    render() {
        return (
            <div className="Person">
                <img src={this.getMemberPhoto()} className="photo" alt="Фото"/>
                <div className="Info">{this.getMemberName()}</div>
                <div className="Info">{this.getMemberPosition()}</div>
                <div className="Info">{this.getMemberEducation()}</div>
                <div className="About">{this.getMemberAbout()}</div>
                </div>
        );
    }
}

// <div className="Person">
    // <div className="photo">photo</div>
    // <div className="Info">Имя и фамилия</div>
    // <div className="Info">Роль</div>
    // <div className="Info">Вуз/направление</div>
    // <div className="Info">Роль</div>
    // <div className="Info">Почта</div>
    // <div className="Info">Телефон</div>
    // <div className="About">О себе</div>
    // </div>