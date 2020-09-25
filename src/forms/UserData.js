import React, {Component} from 'react';

export class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                memberName: '',
                memberPosition: '',
                memberAbout: ''
            }
        }

        this.memberNameChange = this.memberNameChange.bind(this);
        this.memberPositionChange = this.memberPositionChange.bind(this);
        this.memberAboutChange = this.memberAboutChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    memberNameChange(event) {
        this.setState({memberName: event.target.value});
    }

    memberPositionChange(event) {
        this.setState({memberPosition: event.target.value});
    }

    memberAboutChange(event) {
        this.setState({memberAbout: event.target.value});
    }

    handleSubmit(event) {
        this.props.dataGetter(this.props.userId, this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                    <label htmlFor={"memberName-" + this.props.userId}>Имя Фамилия</label><br/>
                    <input
                        type="text"
                        name={"memberName-" + this.props.userId}
                        placeholder="Иван Иванов"
                        id="memberName"
                        value={this.state.memberName}
                        onChange={this.memberNameChange}
                        maxLength="30"
                        required
                    />
                    <br/>
                    <label htmlFor={"memberPosition" + this.props.userId}>Должность</label><br/>
                    <input
                        type="text"
                        name={"memberPosition" + this.props.userId}
                        placeholder="Разработчик, Менеджер..."
                        id="memberPosition"
                        value={this.state.memberPosition}
                        onChange={this.memberPositionChange}
                        maxLength="30"
                        required
                    />
                    <br/>

                    <label htmlFor={"memberAbout" + this.props.userId}>Дополнительная Информация</label><br/>
                    <textarea
                        name={"memberAbout" + this.props.userId}
                        id="memberAbout"
                        maxLength="100"
                        value={this.state.memberAbout}
                        onChange={this.memberAboutChange}
                    />
                    <br/>

                    <input type="submit" name="submit" value="Отправить"/>
                </form>
            </div>
        );
    }
}

// <script type="text/javascript">
//     let person=
//     {
//         firstLastName:'',
//         email:'',
//         phone:'',
//         about:'',
//     }
//     function getInfo(form)
//     {
//         person.firstLastName=form.FirstLastName.value;
//         person.email=form.Email.value;
//         person.phone=form.Phone.value;
//         person.about=form.About.value;
//         console.log(person)
//     }
// </script>
// <form action="" method="get"  name ="form" id="form">
//     <label for="FirstLastName">Имя Фамилия</label><br />
//     <input type="text" name="FirstLastName" placeholder="Иван Иванов" id ="FirstLastName" required><br />
//
//         <label for="Email">Email</label><br />
//         <input type="email" name="Email" placeholder="ivanov@mail.ru" id ="Email" required><br />
//
//             <label for="Phone">Телефон</label><br />
//             <input type="tel" name="Phone"  id ="Phone"  pattern="8 [0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"><br />
//
//                 <label>О себе</label><br />
//                 <textarea name="About" maxlength="100"></textarea> <br />
//
//                 <input type="button" onclick="getInfo(document.getElementById('form'))" name="submit" value="Отправить"/>
// </form>
// </body>
// </html>