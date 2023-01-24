import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/user';
import { useState, useEffect } from 'react';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from "../../const/StorageKeys"


const usernameConfig = { //if the component re-renders, it wont re-create objects
    required: true, //username should be required
    minLength: 2 //username should be more than 2 char
} 

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors }} = useForm() //useForm prevents the page from reloading
    //order of operations: 1.takes username from input that has been registered
    //2.with the register function 2.executes onSubmit 3. passes result to data
    const {user, setUser} = useUser()
    const navigate = useNavigate()
    //Local states
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    useEffect (() => {
        if (user !== null){
            navigate('/Profile')
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


    //in return, shandleSubmit will capture all data from form and forward it to onSubmit
    return(
        <>
        <h2>What's your name?</h2>
        <form onSubmit={ handleSubmit(onSubmit) }> 
            <fieldset>
                <label htmlFor="userName">Username</label>
                <input 
                type="text"
                placeholder="johndoe"
                {...register("username", usernameConfig)} /> 
                { errorMessage } 

            </fieldset>
            <button type="submit" disabled={loading}>Continue</button>

            {loading && <p>Logging in...</p>}
            { apiError && <p>{apiError}</p>}

        </form>
        </>
    )
}

export default LoginForm;