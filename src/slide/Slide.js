import React, {Component} from 'react';
import './Slide.css';
import logo from "./logo2018.png";
import {TeamMemberInfo} from "./TeamMemberInfo";

export class Slide extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title : 'Название',
            isEditingTitle : false,
            content: 'content',
            isEditingContent: false
        }

        this.showTitle = this.showTitle.bind(this)
        this.titleChange = this.titleChange.bind(this)
        this.contentChange = this.contentChange.bind(this)
        this.showEditor = this.showEditor.bind(this)
        this.renderTitle = this.renderTitle.bind(this)
        this.showContent = this.showContent.bind(this)
        this.showContentEditor = this.showContentEditor.bind(this)
        this.renderContent = this.renderContent.bind(this)
        this.prepareText = this.prepareText.bind(this)
    }

    showEditor(event) {
        this.setState({isEditingTitle: false})
    }

    showTitle(event) {
        this.setState({isEditingTitle: true})
    }

    showContentEditor(event) {
        this.setState({isEditingContent: false})
    }

    showContent(event) {
        // if (event.keyCode === 13) {
            this.setState({isEditingContent: true})
        // }
    }

    renderTitle() {
        if (!this.state.isEditingTitle)
        {
                return <textarea
                    className="message"
                    value={this.state.title}
                    onChange={this.titleChange}
                    onBlur={this.showTitle}
                />
        }
        else
        {
            return <div className="message" onClick={this.showEditor} ><h1>{this.state.title}</h1></div>
        }
    }

    renderContent() {
        if (!this.state.isEditingContent)
        {
            return <textarea
                className="Team"
                value={this.state.content}
                onChange={this.contentChange}
                onBlur={this.showContent}
            />
        }
        else
        {
            return <div className="Team" onClick={this.showContentEditor} >{this.prepareText(this.state.content)}</div>
        }
    }

    titleChange(event) {
        this.setState({title: event.target.value})
    }

    contentChange(event) {
        console.log(typeof event.target.value)
        this.setState({content: event.target.value})
    }

    prepareText(text) {
        console.log(typeof text)
        return (<div>
            {text.split('\n').map(data => {
                return <p>{data}</p>
            })}
        </div>);
    }

    render() {
        return (
        <div className="Slide" id={this.props.slideId}>
            {/*<div className="TeamTitle">{this.props.teamName}</div>*/}
            <img className="Logo_sol" src={logo} />
            {this.renderTitle()}
            {this.renderContent()}
        </div>
        );

    }
}

export default Slide;
