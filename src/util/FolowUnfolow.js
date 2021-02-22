
export const funcMapUsers = (users, userId, objPropName, followed) => {
    return users.map(item => {
        if (userId === item[objPropName]) {
            return {...item, ...followed}
        }
        return item
    })
}