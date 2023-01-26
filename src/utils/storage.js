//to read and write from storage
//localStorage is a built-in browser API.. so with these methods we can store users to browser
export const storageSave = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
} 

export const storageRead = key => {
    const data = sessionStorage.getItem(key)
    if (data) { //if data exists
        return JSON.parse(data) //parse takes string and concerts to JS object
    }
//else..
    return null
}

export const storageDelete = key => {
    sessionStorage.removeItem(key)
}

