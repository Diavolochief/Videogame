import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    //hooks de users y auth
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //navigate para usar mis rutas 

    const navigate = useNavigate();

    //funcion para ingresar
    const ingresar = async () => {
        const url = 'http://127.0.0.1:8000/api/auth/sign-in'

        const user = await axios.post(url, {
            email: email,
            password: password,
        })
        localStorage.setItem('user', JSON.stringify(user.data));
        navigate('/lista')
    }



    return (
        <div className=" flex items-center justify-center h-screen">

            {/* fondo */}
            <div className='bg-red-50 text-white font-bold rounded-lg border shadow-lg p-10
          h-3/4 w-1/3   md:w-3/4 md:p-5 md:h-3/5 md:fixed '>
                <h1 className='mb-10 text-center text-black text-4xl  '>Test</h1>
                {/* form de acceso */}
                <div className='flex items-center justify-center mb-9'>
                    <div className='' >
                        <p className='text-black mb-1'>Email address</p>
                        <input
                            className='w-96  xl:w-11/12  m-auto h-16 br-25 px-3 rounded-lg border-gray-500'
                            placeholder='Enter your email address'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                </div>

            {/* contraseña */}
                <div className='flex items-center justify-center mb-9'>
                    <div className='' >
                        <p className='text-black mb-1'>Password</p>
                        <input
                            className=' w-96  xl:w-11/12  h-16 br-25 px-3 rounded-lg border-gray-500   '
                            placeholder='Enter your Password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                </div>
                {/* boton de login y register */}
                <div className=' flex items-center justify-center mb-10 md:mb-2'>

                    <button
                        className='bg-green-400 hover:bg-green-500 h-16 w-96  mt-2 p-5 md:11/12 text-white rounded-lg font-bold'
                        onClick={() => {
                            if (email.length === 0 && password.length === 0) {
                                alert('ingrese ambos campos para acceder')
                            } else {
                                ingresar()
                            }
                        }}
                    >Log In</button>

                </div>
                {/*  */}
                <div className=' flex items-center justify-center'>

                    <button
                        className='bg-green-400 hover:bg-green-500 h-16 w-96  xl-2 p-5 xl:11/12 text-white rounded-lg font-bold'
                        onClick={() => navigate('/registrar')}
                    >Sign In</button>

                </div>

            </div>

        </div>




    );
}

export default Login;