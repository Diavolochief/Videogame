import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    // state para guardar el texto antes de mandarlo ala api
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('')


    //navigate para navegar entre las  pestañas
    const navigate = useNavigate();



    const createUser = async () => {
        const url = 'http://127.0.0.1:8000/api/auth/sign-up'

        const user = await axios.post(url, {
            name: name,
            email: email,
            password: password
        })
        localStorage.setItem('user', JSON.stringify(user.data));
        navigate('/lista')  

    }



    return (
        <div className=" flex items-center justify-center h-screen">


            <div className='bg-red-50 text-white font-bold rounded-lg border shadow-lg p-24
  h-3/4 w-2/4  md:w-3/4 md:p-5 md:h-3/4  '>
                <h1 className='mb-10 text-center text-black text-4xl  '>New User Registration</h1>

                <div className='flex items-center justify-center mb-10 '>
                    <div  >
                        <p className='text-black mb-1'>Name</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg text-black  xl:w-11/12  m-auto'
                            placeholder='Name'
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                </div>

                <div className='flex items-center justify-center mb-9'>
                    <div>
                        <p className='text-black mb-1'>E-mail</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg text-black xl:w-11/12  m-auto  '
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder='Publication Date'
                            type='email'

                        />
                    </div>
                </div>

                <div className='flex items-center justify-center mb-9'>
                    <div>
                        <p className='text-black mb-1'>Password</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg text-black  xl:w-11/12  m-auto '
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder='Publication Date'
                            type='password'

                        />
                    </div>
                </div>

                <div className=' flex items-center justify-center '>

                    <button
                        className='bg-green-400 hover:bg-green-500 h-16 w-96  mt-2 p-5s text-white rounded-lg font-bold'
                        onClick={() => {
                            if (name.length === 0 && password.length === 0 && email.length === 0) {
                                alert('todos los campos son requeridos')
                            } else {
                                createUser()
                            }
                        }}>
                        Create User
                    </button>


                </div>

            </div>

        </div>
    )
}

export default Register;