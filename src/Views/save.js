import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Save = () => {
    // state para guardar el texto antes de mandarlo ala api
    const [publicacionDate, setPublicacionDate] = useState('')
    const [name, setName] = useState('')


    //navigate para navegar entre las  pestañas
    const navigate = useNavigate();



    const crear = async () => {
        const url = 'http://127.0.0.1:8000/api/videogames'
        const resultado = await axios.post(url, {
            name: name, publication_date: publicacionDate
        })
        console.log(resultado.data)
        navigate('/lista')



    }





    return (
        <div className=" flex items-center justify-center h-screen">


            <div className='bg-red-50 text-white font-bold rounded-lg border shadow-lg p-24
  h-3/4 w-2/4   md:w-3/4 md:p-5 md:h-3/5 md:fixed '>
                <h1 className='mb-10 text-center text-black text-4xl  '>Create VideoGame</h1>

                <div className='flex items-center justify-center mb-10 '>
                    <div>
                        <p className='text-black mb-1'>Name</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg text-black '
                            placeholder='Name'
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                </div>

                <div className='flex items-center justify-center mb-9'>
                    <div className=' ' >
                        <p className='text-black mb-1'>Publication Date</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg text-black  '
                            onChange={(event) => setPublicacionDate(event.target.value)}
                            placeholder='Publication Date'
                            type='date'
                        />
                    </div>
                </div>

                <div className=' flex items-center justify-center '>

                    <button
                        className='bg-green-400 hover:bg-green-500 h-16 w-96  mt-2 p-5s text-white rounded-lg font-bold'
                        onClick={() => {
                            if (name.length === 0 && publicacionDate.length === 0) {
                                alert('es necesario ingresar los datos para crear')
                            } else {
                                crear()
                            }
                        }


                        }>
                        Save Game
                    </button>


                </div>

            </div>

        </div>
    )
}

export default Save;