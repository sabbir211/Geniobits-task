import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useUserData from '../../Hooks/useUserData';

const Login = () => {
    const [users, loading] = useUserData()
    const [existingUser, setExistingUser] = useState({})
    const navigate=useNavigate()
    const verifyUser = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const knownUser = users.find(user => user.email === email)
        if (knownUser) {
            setExistingUser(knownUser)
            navigate(`/home/${knownUser.id}`)
        }
        else{
            swal("SORRY","Email did not match","error")
        }
    }
    if(loading){
        return <p>Loading... </p>
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border p-8'>
                <h1 className='text-center text-2xl font-semibold my-4'>Welcome back </h1>
                <form onSubmit={verifyUser}>
                    <label htmlFor="email" className='block'>Enter email</label>
                    <input type="email" name='email' placeholder="Type here" class="input input-bordered border-indigo-500 w-full max-w-xs focus:outline-none" />
                    <input className='btn btn-primary px-4 my-5  block text-white' type="submit" value="Login" />
                </form>
                <p className='text-xl '>For testing use <span className='bg-gray-200 p-2 rounded-md'>Sincere@april.biz </span> </p>
            </div>

        </div>
    );
};

export default Login;