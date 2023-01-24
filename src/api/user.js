import { createHeaders } from "./index";

const apiUrl = process.env.REACT_APP_API_URL

//reading the user from the API
const checkForUser = async (username) => { //does the user exist or not
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('Could not complete')
        }
        const data = await response.json()
        return [null, data]
    }
    catch(error){
        return [error.message, []]
    }
}

const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username, 
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not create user')
        }
        const data = await response.json()
        return [null, data]
    }
    catch(error){
        return [error.message, []]
    }
}

export const loginUser = async (username) => {
    const [ checkError, user ] = await checkForUser(username)

    if (checkError !== null) { //if there is an error
        return [checkError, null]
    }

    if (user.length > 0) {
        //user does exist, nothing went wrong
        return [null, user.pop()] //.pop bc we want to return only onw user, not the whole array
    }

    return await createUser(username) //if nothing went wrong and if 
}

export const userById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        if (!response.ok) {
            throw new Error('Could not fetch user')
        }
        const user = await response.json()
        return [null, user]
        //null for error, user for user
    }
    catch(error){
        return [ error.message, null ]
    }

}
