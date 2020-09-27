import React, {Component} from 'react';
import './Slide.css';
import logo from "./logo2018.png";
import {TeamMemberInfo} from "./TeamMemberInfo";

export class Slide extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title : 'Название',
            isEditingTitle : true,
            content: 'content',
            isEditingContent: true,
            image: '',
            imageFile: '',
            isEditingImage: true
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
        this.showImage = this.showImage.bind(this)
        this.showImageUploader = this.showImageUploader.bind(this)
        this.photoChange = this.photoChange.bind(this)
        this.renderImage = this.renderImage.bind(this)
    }

    showEditor(event) {
        this.setState({isEditingTitle: true})
    }

    showTitle(event) {
        this.setState({isEditingTitle: false})
    }

    showContentEditor(event) {
        this.setState({isEditingContent: true})
    }

    showContent(event) {
        this.setState({isEditingContent: false})
    }

    renderTitle() {
        if (this.state.isEditingTitle)
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
        if (this.state.isEditingContent)
        {
            return <textarea
                className="Content"
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
        this.setState({content: event.target.value})
    }

    prepareText(text) {
        return (<div>
            {text.split('\n').map(data => {
                return <p>{data}</p>
            })}
        </div>);
    }

    showImage(event) {
        this.setState({isEditingImage: false})
    }

    showImageUploader(event) {
        this.setState({isEditingImage: true})
    }

    photoChange(event) {
        event.preventDefault()

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({

                image: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    renderImage() {
        if (this.state.isEditingImage)
        {
            return <div>
                <input
                       type="file"
                       onChange={this.photoChange}
                />
                <input type="button" onClick={this.showImage} value="Показать картинку"/>
            </div>
        }
        else
        {
            return <img className="slide-photo" onClick={this.showImageUploader} src={this.state.image} onChange={this.photoChange}/>
        }
    }


    render() {
        return (
        <div className="Slide" id={this.props.slideId}>
            <img className="Logo_sol" src={logo} />
            {this.renderTitle()}
            {this.renderContent()}
            <div className="Content" >{this.renderImage()}</div>
        </div>
        );

    }
}

export default Slide;
