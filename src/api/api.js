import * as axios from "axios";

const axiosDefault = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "807c566b-b974-4c0e-9bd2-7343740e681f"
    }
})

// DAL
export const getApiData = {
    getUsers: (countUser, currentPage) => {
        return axiosDefault.get(`users?count=${countUser}&page=${currentPage}`)
            .then(response => response.data.items)
    },

    postFollow: (id) => {
        return axiosDefault.post(`follow/${id}`).then(response => response.data.resultCode)
    },

    deleteFolow: (id) => {
        return axiosDefault.delete(`follow/${id}`).then(response => response.data.resultCode)
    },

    authMe: () => {
        return axiosDefault.get(`auth/me`).then(response => response.data.data)
    },
    getProfileUser: (id) => {
        return axiosDefault.get(`profile/${id}`).then(response => response.data)
    },
    getStatus: (id) => {
        return axiosDefault.get(`profile/status/${id}`).then(response => response.data)
    },
    updateStatus: (status) => {
        return axiosDefault.put(`profile/status/`, { status: status} )
    }
}

