import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className=" flex items-center justify-center h-screen">


            <div className='bg-red-50 text-white font-bold rounded-lg border shadow-lg p-10
          h-2/4 w-1/3'>
                <h1 className='mb-10 text-center text-black text-4xl  '>Test</h1>

                <div className='flex items-center justify-center mb-10 '>
                    <div className=' ' >
                        <p className='text-black mb-1'>Email address</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg border-gray-500'
                            placeholder='Enter your email address'
                        />
                    </div>
                </div>


                <div className='flex items-center justify-center mb-9'>
                    <div className=' ' >
                        <p className='text-black mb-1'>Password</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg border-gray-500 '
                            placeholder='Enter your Password'
                        />
                    </div>
                </div>

                <div className=' flex items-center justify-center mb-10'>

                    <button
                        className='bg-green-400 hover:bg-green-500 h-16 w-96  mt-2 p-5s text-white rounded-lg font-bold'
                        onClick={() => navigate('/Lista')}
                    >Log In</button>

                </div>

            </div>

        </div>




    );
}

export default Login;