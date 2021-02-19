import React from "react"


export let requireForm = (value) => {
    if (!value) return "Require form"
    return undefined
}

export const maxLenght10 = (length) => (value) => {
    if (value && value.length > length) return `Max length is ${length} symbol`
    return undefined
}