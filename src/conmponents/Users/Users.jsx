import usersStyle from "./usersStyle.module.css"
const Users = (props) => {
    return (
        <div>
            {
                props.users.map(item => (
                    <section className={usersStyle.content}>
                        <div className={usersStyle.infoUser}>
                            <img className={usersStyle.imgUser} src={item.imgUrl} alt=""/>
                            {
                                item.folowed ? <button onClick={() => props.unFolow(item.id)} className="button button_unfolow">Unfolow</button>
                                    : <button onClick={() => props.folow(item.id)} className="button" >Folow</button>


                            }

                        </div>
                        <div className={usersStyle.description}>
                            <div>
                                <h1 className={usersStyle.name_user}>{item.name}</h1>
                                <p className={usersStyle.status_user}>{item.status}</p>
                            </div>
                            <div className={usersStyle.location_user}>

                            <span>
                                {item.location.country}
                            </span>
                                <span>
                                {item.location.cityName}
                            </span>
                            </div>
                        </div>
                        <hr/>
                    </section>
                ))
            }
        </div>

    )
}

export default Users