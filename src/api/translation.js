import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL

export const addTranslation = async (user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })

        if (!response.ok) {
            throw new Error('Could not update')
        }
        const result = await response.json()
        return [ null, result]

    }
    catch(error){
        return [error.message, null ]
    }

}

export const clearTranslationHistory = (userId) => {
    //video 13

}