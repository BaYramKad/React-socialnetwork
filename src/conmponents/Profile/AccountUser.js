import profileStyle from "./Profile.module.css";
import user from "../../img/userAvatar/user.png"
import React, {useState, useEffect} from "react";

const AccountUser = (props) => {
    const [isStatus, setStatus] = useState(false)
    let [status, changeStatus] = useState(props.status)

    useEffect(() => {
        changeStatus(props.status)
    }, [props.status])

    const activeStatus = () => {
        setStatus(true)
    }

    const diActivetedStatus = () => {
        setStatus(false)
        props.updateStatusProfile(status)
    }

    const changeText = (event) => {
        let text = event.target.value
        changeStatus(text)
    }

    return (
        <div>
            <img className={profileStyle.content_img}
                 src="https://cs10.pikabu.ru/post_img/big/2018/07/02/11/1530555134117293047.jpg"/>
            <div className={profileStyle.sectionUser}>
                <div className={profileStyle.description}>
                    <img className={profileStyle.content_avatar}
                         src={props.photos.small ? props.photos.small : user}/>
                    <div className={profileStyle.info}>
                        <h1>{props.fullName}</h1>
                        <div className={profileStyle.changeStatus}>
                            {!isStatus &&
                            <textarea placeholder="Изменить статус" value={status}
                                      className={profileStyle.status}
                                      onClick={activeStatus}> </textarea>}
                            {isStatus && <textarea className={profileStyle.inputProfile}
                                                   autoFocus="true" value={status}
                                                   onChange={changeText}
                                                   onBlur={diActivetedStatus}>
                        </textarea>}
                        </div>
                        <p>Saint Petersburg 20 years</p>
                        <small>{props.aboutMe}</small>
                        {props.lookingForAJob ? <p>Ищу работу</p> : <p>Не ищу работу</p>}
                    </div>
                    <div className={profileStyle.contacts_networks}>
                        <a href="#">{props.contacts.facebook}</a>
                        <a href="#">{props.contacts.website}</a>
                        <a href="#">{props.contacts.vk}</a>
                        <a href="#">{props.contacts.instagram}</a>
                    </div>

                </div>
            </div>
        </div>
    )

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
