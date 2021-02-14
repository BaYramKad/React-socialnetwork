import usersStyle from "./usersStyle.module.css"
import user from "../../img/userAvatar/user.png";
import * as axios from "axios";
import * as React from "react";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${this.props.currentPage}`)
            .then(response => {
                console.log(response)
                this.props.setUsers(response.data.items)
                console.log(response)
                // this.props.setCountPage(response.data.totalCount)
            })
    }

    onPageChanged(currentPage) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPage(currentPage)
            })
    }

    render() {
        const pages = Math.ceil(100 / 10)
        const page = []

        for (let i = 1; i <= pages; i++) {
            page.push(i)
        }

        return <div>
                <div>
                    {
                        page.map( item => {
                            return <span onClick={ () => this.onPageChanged(item)} className={ this.props.currentPage === item && usersStyle.pagination }>{ item }</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(item => (
                        <section className={usersStyle.content}>
                            <div className={usersStyle.infoUser}>
                                <img className={usersStyle.imgUser} src={user} alt=""/>
                                {
                                    item.folowed ? <button onClick={() => this.props.unFolow(item.id)}
                                                           className="button button_unfolow">Unfolow</button>
                                        : <button onClick={() => this.props.folow(item.id)} className="button">Folow</button>
                                }
                            </div>
                            <div className={usersStyle.description}>
                                <div>
                                    <h1 className={usersStyle.name_user}>{item.name}</h1>
                                    <p className={usersStyle.status_user}>{item.status}</p>
                                </div>
                                <div className={usersStyle.location_user}>
                            <span>
                                {"item.location.country"}
                            </span>
                                    <span>
                                {"item.location.cityName"}
                            </span>
                                </div>
                            </div>
                        </section>
                    ))
                }

            </div>


    }
}

export default Users