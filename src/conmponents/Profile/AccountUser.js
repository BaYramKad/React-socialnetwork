import profileStyle from "./Profile.module.css";
import user from "../../img/userAvatar/user.png"
import React, {setState} from "react";

class AccountUser extends React.Component {
    state = {
        isStatus: false,
        status: this.props.status
    }
    usStatusTrue = () => {
        this.setState({
            isStatus: true
        })
    }

    diActivetedStatus = () => {
        this.setState({
            isStatus: false
        })
        this.props.updateStatusProfile(this.state.status)
    }

    changeText = (event) => {
        let text = event.target.value
        this.setState({
            status: this.props.changeProfileStatus(text)
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.status !== this.props.status) {
            this.setState({
                status: this.props.status
            } )
        }
    }

    render() {
        return (
            <div>
                <img className={profileStyle.content_img}
                     src="https://cs10.pikabu.ru/post_img/big/2018/07/02/11/1530555134117293047.jpg"/>

                     <div className={profileStyle.sectionUser}>
                         <div className={profileStyle.description}>
                             <img className={profileStyle.content_avatar}
                                  src={this.props.photos.small ? this.props.photos.small : user}/>
                             <div className={profileStyle.info}>
                                 <h1>{this.props.fullName}</h1>
                                 <div className={profileStyle.changeStatus}>
                                     {!this.state.isStatus && <textarea  placeholder="Изменить статус" value={this.props.status} className={profileStyle.status}
                                                                  onClick={this.usStatusTrue}> </textarea>}
                                     {this.state.isStatus && <textarea className={profileStyle.inputProfile}
                                                                        autoFocus={true} value={this.props.status}
                                                                        onChange={this.changeText} onBlur={this.diActivetedStatus}>
                        </textarea>}
                                 </div>
                                 <p>Saint Petersburg 20 years</p>
                                 <small>{this.props.aboutMe}</small>
                                 {
                                     this.props.lookingForAJob ? <p>Ищу работу</p> : <p>Не ищу работу</p>
                                 }

                             </div>
                             <div className={profileStyle.contacts_networks}>
                                 <a href="#">{this.props.contacts.facebook}</a>
                                 <a href="#">{this.props.contacts.website}</a>
                                 <a href="#">{this.props.contacts.vk}</a>
                                 <a href="#">{this.props.contacts.instagram}</a>
                             </div>

                         </div>
                     </div>



            </div>
        )
    }
}

/*
*
* aboutMe: "я круто чувак 1001%"
contacts: {facebook: "facebook.com", website: null, vk: "vk.com/dimych", twitter: "https://twitter.com/@sdf", instagram: "instagra.com/sds", …}
fullName: "samurai dimych"
lookingForAJob: true
lookingForAJobDescription: "не ищу, а дурачусь"
photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0", large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}
userId: 2
* */

export default AccountUser;
