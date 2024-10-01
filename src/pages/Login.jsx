import React from 'react'
import logo from '../assets/logo.jpeg'
import {useNavigate} from 'react-router-dom'

function login() {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        navigate('/home')
    }

  return (
    <>
        <div className='h-screen flex justify-center items-center'>
            <form className='bg-white p-8 rounded shadow-md w-full max-w-sm' onSubmit={handleLogin}>
                <img src={logo} alt="" />
                <h1 className='mb-5'>Login</h1>
                <div className='mb-4 flex flex-col'>
                    <label>DNI</label>
                    <input type="text" placeholder='DNI' className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700' />
                </div>
                <div className='mb-4 flex flex-col'>
                    <label>Contraseña</label>
                    <input type="password" placeholder='Contraseña' className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700' />
                </div>
                <button type='submit' className='bg-green-500 text-white w-full h-10 hover:bg-green-700'>Ingresar</button>
            </form>
        </div>
    </>
  )
}

export default login