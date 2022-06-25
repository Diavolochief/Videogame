import axios from 'axios';
import React, {useEffect,useState } from 'react'
// import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {


//agregar nombre y fecha al placeHolder


const [name,setName]=useState('')
const [publicationDate,setPublicationDate]=useState('')


    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const obtenerVideoG=async()=>{
            const url=`http://127.0.0.1:8000/api/videogames/${params.id}`
            const resultado = await axios.get(url)
            console.log(resultado.data)
            setPublicationDate(resultado.data.publication_date)
            setName(resultado.data.name)
        }


obtenerVideoG()
    }, [])


    const actualizar =async()=>{
        console.log(name,publicationDate)
        const res = await axios.put(`http://127.0.0.1:8000/api/videogames/${params.id}`,
        {name,publication_date:publicationDate})
 console.log(res.data)
    navigate('/Lista')
    }




    return (
        <div className=" flex items-center justify-center h-screen">

            <div className='bg-red-50 text-white font-bold rounded-lg border shadow-lg p-24
h-3/4 w-2/4'>
                <h1 className='mb-10 text-center text-black text-5xl  '>Edit VideoGame</h1>

                <div className='flex items-center justify-center mb-10 '>
                    <div className=' ' >
                        <p className='text-black mb-1'>Name</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg text-black '
                            value={name}
                            onChange={(event)=>setName(event.target.value)}
                        />
                    </div>
                </div>


                <div className='flex items-center justify-center mb-9'>
                    <div className=' ' >
                        <p className='text-black mb-1'>Publication Date</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg border-gray-500  text-black '
                            value={publicationDate}
                            onChange={(event)=>setPublicationDate(event.target.value)}
                            type='date'

                        />
                    </div>
                </div>

                <div className=' flex items-center justify-center '>

                    <button
                        className='bg-green-400 hover:bg-green-500 h-16 w-96  mt-2 p-5s text-white rounded-lg font-bold '
                        onClick={() => actualizar()}>

                        Save Game
                    </button>


                </div>

            </div>

        </div>
    )
}

export default Edit