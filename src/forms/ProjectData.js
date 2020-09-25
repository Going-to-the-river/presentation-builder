import React, {Component} from 'react';

export class ProjectData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                projectName: '',
                projectEmail: '',
                projectPhone: '',
            }
        }

        this.projectNameChange = this.projectNameChange.bind(this);
        this.projectEmailChange = this.projectEmailChange.bind(this);
        this.projectPhoneChange = this.projectPhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    projectNameChange(event) {
        this.setState({projectName: event.target.value});
    }

    projectEmailChange(event) {
        this.setState({projectEmail: event.target.value});
    }

    projectPhoneChange(event) {
        this.setState({projectPhone: event.target.value});
    }

    handleSubmit(event) {
        this.props.dataGetter(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form id="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="projectName">Название проекта</label><br/>
                    <input
                        type="text"
                        name="projectName"
                        placeholder="Название проекта"
                        id="projectName"
                        value={this.state.projectName}
                        onChange={this.projectNameChange}
                        maxLength="30"
                        required
                    />
                    <br/>
                    <label htmlFor="projectEmail">Email</label><br/>
                    <input
                        type="email"
                        name="projectEmail"
                        placeholder="team_mail@example.com"
                        id="projectEmail"
                        value={this.state.projectEmail}
                        onChange={this.projectEmailChange}
                        required
                    />
                    <br/>

                    <label htmlFor="projectPhone">Телефон</label><br/>
                    <input
                        type="tel"
                        name="projectPhone"
                        id="projectPhone"
                        // pattern="+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        value={this.state.projectPhone}
                        onChange={this.projectPhoneChange}
                        required
                    />
                    <br/>
                    <input type="submit" name="submit" value="Отправить"/>
                </form>
            </div>
        );
    }
}