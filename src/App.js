import React, {Component} from 'react';
import './App.css';
import {Content} from "./content/Content";
import {UserData} from "./forms/UserData";
import {ProjectData} from "./forms/ProjectData";
import {ImageUploader} from "./forms/ImageUploader";

export class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slides : [],
            count : 0,
            projectData : {
                projectName: '',
                projectTeamName: '',
                projectEmail: '',
                projectPhone: '',
            },
            teamMembers : []
        }
        this.newSlide = this.newSlide.bind(this);
        this.newMember = this.newMember.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
        this.getUserData = this.getUserData.bind(this);
        this.getProjectData = this.getProjectData.bind(this);
    }


    newSlide() {
        const id = `slide-id-${this.state.count}`
        this.setState(state => {
            return {
                count: state.count + 1,
                slides: state.slides.concat([id])
            }
        })
    }

    newMember () {
        if (this.state.teamMembers.length < 4) {
            this.setState(state => {
                return {
                    teamMembers: state.teamMembers.concat([state.teamMembers.length])
                }
            })
        }
    }

    deleteMember () {
        if (this.state.teamMembers.length > 0) {
            this.setState(state => {
                state.teamMembers.pop()
                return {
                    teamMembers: state.teamMembers
                }
            })
        }
    }

    getUserData(id, userData) {
        console.log(id)
        console.log(userData)
        this.setState(state => {
            state.teamMembers[id] = userData
            return {
                teamMembers: state.teamMembers
            }
        })
    }

    getProjectData(projectData) {
        console.log(projectData)
        this.setState(state => {
            return {
                projectData: projectData
            }
        })
    }

    render() {
        return (
            <div>
                <ProjectData dataGetter={this.getProjectData}/>
                <button type="button" className="App-button" onClick={this.newMember}>Добавить Участника</button>
                <button type="button" className="App-button" onClick={this.deleteMember}>Удалить Участника</button>
                {this.state.teamMembers.map(userId => {
                    return <UserData userId={userId} dataGetter={this.getUserData}/>
                })}
                <button type="button" className="App-button" onClick={this.newSlide}>Add Slide</button>
                {/*<ImageUploader />*/}
                <Content slides={this.state.slides} titleSlideData={this.state.projectData} teamSlideData={this.state.teamMembers}/>
            </div>
        );
    }
}

