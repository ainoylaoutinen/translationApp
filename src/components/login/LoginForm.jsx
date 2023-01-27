import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/user';
import { useState, useEffect } from 'react';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from "../../const/StorageKeys"

const usernameConfig = { 
    required: true, //username should be required
    minLength: 2 //username should be more than 2 char
} 

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors }} = useForm() //useForm prevents the page from reloading
    //order of operations: 1.takes username from input that has been registered
    //2.with the register function 2.executes onSubmit 3. passes result to data
    const {user, setUser} = useUser()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    useEffect (() => {
        if (user !== null){
            navigate('/Translations')
        }
        console.log('User has changed', user)
    }, [user, navigate])
//as soon as there is a user it should go to profile
//context needs to save the user because we want to use user also in Profile

    const onSubmit = async({username}) => { //submitting form data
        setLoading(true)
        const [error, userResponse] = await loginUser(username) //with async - await we dont need to use fetch
        if (error !== null){
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse) //saves a user as a key-value pair to a browser => storage.js
            setUser(userResponse)
        }
        setLoading(false)
    }

    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short</span>
        }
    })()

    return(
        <>
        <form onSubmit={ handleSubmit(onSubmit) }> 
            <fieldset>
                <label htmlFor="userName"></label>
                <input 
                type="text"
                placeholder="What's your name?"
                style={{padding: 20, borderRadius: 20, marginTop: 30, marginBottom: 20}}
                {...register("username", usernameConfig)} /> 
                { errorMessage } 

            </fieldset>
            <button type="submit" disabled={loading} 
            style={{ backgroundColor:'transparent', border: 'none', fontFamily:'Ink Free', fontWeight: 'bold', fontSize: 'xx-large', padding: 20}}>Log in!</button>

            {loading && <p>Logging in...</p>}
            { apiError && <p>{apiError}</p>}

        </form>
        </>
    )
}

export default LoginForm;
