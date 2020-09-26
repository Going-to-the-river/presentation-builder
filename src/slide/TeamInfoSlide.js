import React, {Component} from 'react';
import './Slide.css';
import {TeamMemberInfo} from "./TeamMemberInfo";
import logo from "./logo2018.png"

export class TeamInfoSlide extends Component{
    render() {
        return (
            <div className="Slide" /*id={this.props.slideId}*/>
                {/*<div className="TeamTitle">{this.props.teamName}</div>*/}
                <img className="Logo_sol" src={logo} />
                <div className="message"><h1>Состав команды</h1></div>
                <div className="Team">
                {/*<ul className="team-members-list">*/}
                    {this.props.slideData.map(data => {
                        return (
                            <TeamMemberInfo
                                memberName={data.memberName}
                                memberPosition={data.memberPosition}
                                memberEducation={data.memberEducation}
                                memberAbout={data.memberAbout}
                            />
                        );
                    })}
                {/*</ul>*/}
                </div>
            </div>
        );
    }
}

// <div class = "Slide">
//     <div style="width:30%;  height: 10% ;margin-top: 2%;
//     margin-left: 3%;
//     float:left;    outline: 1px solid black;
//     background: lightgray;">Команда</div>
//     <div class = "Logo_sol">Лого</div>
//     <div class = "message">message</div>
//     <div class ="Team">
//         <div class = "Person">
//             <div class = "photo">photo</div>
//             <div class= "Info">Имя и фамилия</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Вуз/направление</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Почта</div>
//             <div class= "Info">Телефон</div>
//             <div class= "About">О себе</div>
//         </div>
//         <div class = "Person">
//             <div class = "photo">photo</div>
//             <div class= "Info">Имя и фамилия</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Вуз/направление</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Почта</div>
//             <div class= "Info">Телефон</div>
//             <div class= "About">О себе</div>
//         </div>
//         <div class = "Person">
//             <div class = "photo">photo</div>
//             <div class= "Info">Имя и фамилия</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Вуз/направление</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Почта</div>
//             <div class= "Info">Телефон</div>
//             <div class= "About">О себе</div>
//         </div>
//         <div class = "Person">
//             <div class = "photo">photo</div>
//             <div class= "Info">Имя и фамилия</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Вуз/направление</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Почта</div>
//             <div class= "Info">Телефон</div>
//             <div class= "About">О себе</div>
//         </div>
//         <div class = "Person">
//             <div class = "photo">photo</div>
//             <div class= "Info">Имя и фамилия</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Вуз/направление</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Почта</div>
//             <div class= "Info">Телефон</div>
//             <div class= "About">О себе</div>
//         </div>
//         <div class = "Person">
//             <div class = "photo">photo</div>
//             <div class= "Info">Имя и фамилия</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Вуз/направление</div>
//             <div class= "Info">Роль</div>
//             <div class= "Info">Почта</div>
//             <div class= "Info">Телефон</div>
//             <div class= "About">О себе</div>
//         </div>
//     </div>
//
//
// </div>
// </body>
// </html>
