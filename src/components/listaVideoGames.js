import React, { useEffect, useState,  } from 'react'
import axios from 'axios'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'

const ListaVideoGames = () => {
  const [api, setApi] = useState([])

  //navegar 
  const navigate = useNavigate();


  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon'
      const resultado = await axios.get(url)
      console.log(resultado.data.results)
      setApi(resultado.data.results)
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
              <button className='font-thin bg-blue-500 hover:bg-blue-800 w-full   p-2 text-white uppercase  rounded-md'
                onClick={() => navigate('/guardar') }>
                Create VideoGame
              </button>
            </div>
          </div>

          {/* tabla */}

          <div className=' overflow-scroll  h-96'>
            <div className='flex items-center justify-center mt-15'>
              <table className=" border-collapse border  w-full  border-slate-100 r shadow-lg  text-black  ">
                <thead className='bg-gray-100 h-4/6'>
                  <tr className=''>
                    <th className=" p-2 text-start w-1/3 border border-slate-200 ">Name</th>
                    <th className=" p-2  text-start w-1/3 border  border-slate-200 ">Publication Date</th>
                    <th className=" p-2  text-start  w-1/3 border border-slate-200 ">Action</th>
                  </tr>
                </thead>

                <tbody className='bg-white' >

                  {api.map(poke => (
                    <tr>
                      <td className='border border-slate-200 p-2 '>{poke.name}</td>
                      <td className='border border-slate-200 p-2 '>{poke.url}</td>
                      <td className='border border-slate-200 p-2 '>{poke.name}</td>
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