import usersStyle from "./usersStyle.module.css"
import user from "../../img/userAvatar/user.png";
import * as React from "react";
import Preloader from "./Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Users = ({
                   users,
                   totalUsersCount,
                   countUser,
                   preloader,
                   disableProgress,
                   onPageChanged,
                   currentPage,
                   thunkUnFolow,
                   thunkFolow
               }) => {
    const pages = Math.ceil(totalUsersCount / countUser)
    const page = []
    for (let i = 1; i <= pages; i++) {
        page.push(i)
    }
    return <div>
        <h1 className={usersStyle.title_h1}>Users</h1>
        <Preloader preloader={preloader}/>

        {
            users.map(item => (
                <section className={usersStyle.content}>
                    <div className={usersStyle.infoUser}>
                        <NavLink to={`profile/${item.id}`}>
                            <img className={usersStyle.imgUser} src={item.photos.small || item.photos.large || user}
                                 alt="imgUser"/>
                        </NavLink>
                        {
                            item.followed ?
                                <button disabled={disableProgress.some(i => i === item.id)} onClick={() => {
                                    thunkUnFolow(item.id)
                                }} className="button button_unfolow">Unfolow</button>
                                : <button disabled={disableProgress.some(i => i === item.id)} onClick={() => {
                                    thunkFolow(item.id)
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
        <Preloader preloader={preloader}/>
        <div className={usersStyle.pag_content}>
            <div className={usersStyle.pag_block}>
                {page.map(item => {
                    return <span onClick={() => onPageChanged(item)}
                                 className={currentPage === item && usersStyle.pagination}>{item}</span>
                })}
            </div>
        </div>
    </div>
}

export default Users