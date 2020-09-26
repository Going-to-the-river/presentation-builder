import React, {Component} from 'react';
import './App.css';
import {Content} from "./content/Content";
import {UserData} from "./forms/UserData";
import {ProjectData} from "./forms/ProjectData";
import {ImageUploader} from "./forms/ImageUploader";
import html2pdf from 'html2pdf.js'

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
            teamMembers : [],
            projectDataCallback : () => {},
            teamMemberCallbacks : []
        }
        this.newSlide = this.newSlide.bind(this);
        this.newMember = this.newMember.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
        this.getUserData = this.getUserData.bind(this);
        this.getProjectData = this.getProjectData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getProjectDataCallback = this.getProjectDataCallback.bind(this)
        this.getTeamMemberCallback = this.getTeamMemberCallback.bind(this)
        this.generatePdf = this.generatePdf.bind(this)
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
                    teamMembers: state.teamMembers.concat([state.teamMembers.length]),
                    teamMemberCallbacks: state.teamMemberCallbacks.concat([() => {}])
                }
            })
        }
    }

    deleteMember () {
        if (this.state.teamMembers.length > 0) {
            this.setState(state => {
                state.teamMembers.pop()
                state.teamMemberCallbacks.pop()
                return {
                    teamMembers: state.teamMembers,
                    teamMemberCallbacks: state.teamMemberCallbacks
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
        // console.log(projectData)
        this.setState(state => {
            return {
                projectData: projectData
            }
        })
    }

    getTeamMemberCallback(id, userDataCallback) {
        this.setState(state => {
            state.teamMemberCallbacks[id] = userDataCallback
            return {
                teamMemberCallbacks: state.teamMemberCallbacks
            }
        })
    }

    getProjectDataCallback(projectDataCallback) {
        this.setState(state => {
            return {
                projectDataCallback: projectDataCallback
            }
        })
    }

    handleSubmit(event) {
        this.state.projectDataCallback()
        this.state.teamMemberCallbacks.map(callback => callback())
        event.preventDefault();
    }

    generatePdf(){
        var element = document.getElementById("content")
        var width = element.children[0].clientWidth
        var height = element.children[0].clientHeight

        console.log(width)
        console.log(height)
        var opt = {
            filename:     'presentation.pdf',
            image :       {type : 'jpeg', quality: 1} ,
            html2canvas:  {scale: 2},
            jsPDF:        {unit: 'px', format: [width+289, height+152], orientation: 'l'}
        };
        html2pdf().set(opt).from(element).toContainer().toCanvas().toImg().toPdf().save();
    }

    render() {
        return (
            <div className="">
                <form id="form" onSubmit={this.handleSubmit}>
                    <div className="row menu">
                        <button className="App-button col-md-3" type="submit" name="submit">Генерировать</button>
                        <button type="button" className="App-button col-md-3" onClick={this.newMember}>Добавить Участника</button>
                        <button type="button" className="App-button col-md-3" onClick={this.deleteMember}>Удалить Участника</button>
                        <button type="button" className="App-button col-md-3" onClick={this.generatePdf}>Получить PDF</button>
                    </div>
                    <div className="data-inputs">
                        <ProjectData dataGetter={this.getProjectData} callbackGetter={this.getProjectDataCallback} />
                        <div className="align-items-center">
                        {this.state.teamMembers.map(userId => {
                            return <UserData userId={userId} dataGetter={this.getUserData} callbackGetter={this.getTeamMemberCallback}/>
                        })}
                        </div>
                    </div>
                </form>
                {/*<ImageUploader />*/}
                <div className="container-fluid align-items-center">
                  <Content slides={this.state.slides} titleSlideData={this.state.projectData} teamSlideData={this.state.teamMembers}/>
                  <button type="button" className="App-button" onClick={this.newSlide}>Add Slide</button>
                </div>
            </div>
        );
    }
}

