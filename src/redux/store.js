import keanu_reeves from "./../img/userAvatar/keanu_reeves.jpg";
import foods_person from "./../img/userAvatar/foods_person.jpg";
import girl from "./../img/userAvatar/girl.jpg";
import woman from "./../img/userAvatar/woman.jpg";
import imgLike from "./../img/likesOrdislike/facebook_like.png";
import imgDisLike from "./../img/likesOrdislike/facebook_dislike.png";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";

const store = {
    _state: {
        profilePage: {
            postInfo: [
                {
                    postImg: keanu_reeves,
                    imgLike: imgLike,
                    imgDisLike: imgDisLike,
                    nameUser: "Numi",
                    id: 0,
                    countLike: [0],
                    countDislike: [0],
                    postText: "Helloooooo"
                },
                {
                    postImg: foods_person,
                    imgLike: imgLike,
                    imgDisLike: imgDisLike,
                    nameUser: "Logan",
                    id: 0,
                    countLike: [0],
                    countDislike: [0],
                    postText: "She's a beatisdful girl"
                },
                {
                    postImg: girl,
                    imgLike: imgLike,
                    imgDisLike: imgDisLike,
                    nameUser: "Huliganka",
                    id: 0,
                    countLike: [0],
                    countDislike: [0],
                    postText: "He's a good man"
                }
            ],
            newPostText: ""
        },
        dialogsPage: {
            messagesItems: [
                {message: "hello moto"},
                {message: "he"},
                {message: "hlo moto"}
            ],
            dialogsItems: [
                {name: "Bayram", userImage: keanu_reeves, id: 0},
                {name: "Filip", userImage: foods_person, id: 1},
                {name: "Maya", userImage: girl, id: 2},
                {name: "Rony", userImage: woman, id: 3}
            ],
            textMessage: ""
        }
    },
    getState() {
        return this._state;
    },

    rerenderIntiredTree(state) {
    },

    subscribe(observer) {
        this.rerenderIntiredTree = observer;
    },

    dispatch(action) {
        store.getState = profileReduser(store.getState(), action);
        store.getState = dialogsReduser(store.getState(), action);
    }
};

export default store;


// babel // нужен для того чтобы код работал во всех современных браузерах

// npm webpack webpack-cli -D
// npx webpack // Запуск
// // "watch": "webpack --watch"
// webpack.config.js

// const path = require("path")
// module.exports = {
//     entry: "./index.js", // Точка входа
//     output: { // Точка выхода
//         filename: "bundle.js",  // название файла сборки
//         path: path.resolve(__dirname, "./dist") // Папка в которой буде
//         т наш bundle.js собранный одни файл со всех модулей не забыть переменную __dirname
//         //Но для того чтобы webpack нашел эту папку нужен отдельный плагин
//         path с методор resolve("./dist") только тогда он будет искать этот файл везде
//     },
//     mode: "production", // есть еще для разарботки development и none 3 сосотояния
//     //  Это пишеться для Бабеля Babel
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["@babel/env"]
//                     }
//                 },
//                 excluse: /node_modules/
//             }
//         ]
//     }
// }

// npm webpack webpack-cli -D
// npx webpack

// "watch" : "webpack --watch"


// webpack.dev.config.js
// webpack.prod.config.js

// npm run prod

// "webpack --config webpack.dev.config.js"