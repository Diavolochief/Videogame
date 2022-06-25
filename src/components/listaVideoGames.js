import React, { useEffect, useState,  } from 'react'
import axios from 'axios'
import Footer from './footer'
import {useNavigate } from 'react-router-dom'

const ListaVideoGames = () => {
  const [api, setApi] = useState([])

  //navegar 
  const navigate = useNavigate();


  useEffect(() => {
    const consultarApi = async () => {
      const url = 'http://127.0.0.1:8000/api/videogames'
      const resultado = await axios.get(url)
      console.log(resultado.data)
      setApi(resultado.data)
    }
    consultarApi()
  }, [])




  return (
    <div >
      <div className=" flex items-center justify-center  mb-40 mt-72 h-96 ">
        <div className='bg-red-50 text-white font-bold rounded-lg border shadow-lg p-3
    w-11/12 h-11/12 mb-14'>

          {/* boton y texto */}
          <div className='text-black flex justify-between  mt-20 mb-12'>
            <div>
              <h1 className='text-3xl'>Video Games</h1>
            </div>
            <div className='mr-10'>
              <button className='font-thin bg-blue-500 hover:bg-blue-800 w-full   mt-5 p-2 text-white uppercase  rounded-md'
                onClick={() => navigate('/guardar') }>
                Create VideoGame
              </button>
            </div>
          </div>

          {/* tabla */}

          <div className=' overflow-y-scroll  h-96 '>
            <div className='flex items-center justify-center mt-15 p-2'>
              <table className=" border-collapse border  w-full  border-slate-100 r shadow-lg  text-black  ">
                <thead className='bg-gray-100 h-4/6'>
                  <tr className=''>
                    <th className=" p-2 text-start w-1/3 border border-slate-200 ">Name</th>
                    <th className=" p-2  text-start w-1/3 border  border-slate-200 ">Publication Date</th>
                    <th className=" p-2  text-start  w-1/3 border border-slate-200 ">Action</th>
                  </tr>
                </thead>

                <tbody className='bg-white' >

                  {api.map((video,id) => (
                    
                    <tr key={id}>
                      <td className='border border-slate-200 p-2 '>{video.name}</td>
                      <td className='border border-slate-200 p-2 '>{video.publication_date}</td>
                      <td className='border border-slate-200 p-2 '><a className='text-blue-500 hover:cursor-pointer'  
                      onClick={()=>navigate(`/editar/${video.id}`)}> editar </a> </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
      <Footer>
        <Footer />
      </Footer>
    </div>



  )
}

export default ListaVideoGames