import React, {Component} from 'react';
import './Slide.css';

export class TeamMemberInfo extends Component{
    constructor(props) {
        super(props);

        // this.getMemberName = this.getMemberName.bind(this)
    }

    // getMemberName() {
    //     if (this.props.memberName.length === 0) {
    //         return "Имя Фамилия"
    //     } else {
    //         return this.props.memberName
    //     }
    // }

    render() {
        return (
            <div className="Person">
                <div className="photo">photo</div>
                <div className="Info">{this.props.memberName}</div>
                <div className="Info">{this.props.memberPosition}</div>
                <div className="Info">{this.props.memberEducation}</div>
                {/*<div className="Info">Почта</div>*/}
                {/*<div className="Info">Телефон</div>*/}
                <div className="About">{this.props.memberAbout}</div>
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