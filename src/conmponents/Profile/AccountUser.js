import profileStyle from "./Profile.module.css";

const AccountUser = () => {
    return (
        <div>
            <img className={profileStyle.content_img} src="https://cs10.pikabu.ru/post_img/big/2018/07/02/11/1530555134117293047.jpg" />
                <div className={profileStyle.description}>
                    <img className={profileStyle.content_avatar} src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg" />
                    <div className={profileStyle.info}>
                        <h1>Anna Makarova</h1>
                        <p>Saint Petersburg 20 years</p>
                    </div>
                </div>
        </div>
    )
}

export default AccountUser;
