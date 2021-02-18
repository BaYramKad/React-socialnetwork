import usersStyle from "./usersStyle.module.css"
import user from "../../img/userAvatar/user.png";
import * as React from "react";
import Preloader from "./Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    const pages = Math.ceil(props.totalUsersCount / props.countUser)
    const page = []

    for (let i = 1; i <= pages; i++) {
        page.push(i)
    }

    return <div>
        <h1 className={usersStyle.title_h1}>Users</h1>
        <Preloader preloader={props.preloader}/>

        {
            props.users.map(item => (
                <section className={usersStyle.content}>
                    <div className={usersStyle.infoUser}>
                        <NavLink to={`profile/${item.id}`}>
                            <img className={usersStyle.imgUser} src={item.photos.small || item.photos.large || user}
                                 alt="imgUser"/>
                        </NavLink>
                        {
                            item.followed ?
                                <button disabled={props.disableProgress.some(i => i === item.id)} onClick={() => {
                                    props.thunkUnFolow(item.id)
                                }} className="button button_unfolow">Unfolow</button>
                                : <button disabled={props.disableProgress.some(i => i === item.id)} onClick={() => {
                                    props.thunkFolow(item.id)
                                }} className="button">Folow</button>
                        }
                    </div>
                    <div className={usersStyle.description}>
                        <div>
                            <h1 className={usersStyle.name_user}>{item.name}</h1>
                            <p className={usersStyle.status_user}>{item.status}</p>
                        </div>
                        <div className={usersStyle.location_user}>
                            <span>Saint Petersburg </span>
                            <span>Russia</span>
                        </div>
                    </div>
                </section>
            ))
        }

        <Preloader preloader={props.preloader}/>
        <div className={usersStyle.pag_content}>
            <div className={usersStyle.pag_block}>

                {
                    page.map(item => {
                        return <span onClick={() => props.onPageChanged(item)}
                                     className={props.currentPage === item && usersStyle.pagination}>{item}</span>
                    })
                }
            </div>

        </div>
    </div>
}

export default Users