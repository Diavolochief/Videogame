import React from 'react'

// const [publicacionDate, setPublicacionDate] = useState('')




const Save = () => {
   
    return (
        <div className=" flex items-center justify-center h-screen">


            <div className='bg-red-50 text-white font-bold rounded-lg border shadow-lg p-24
  h-3/4 w-2/4'>
                <h1 className='mb-10 text-center text-black text-4xl  '>Create VideoGame</h1>

                <div className='flex items-center justify-center mb-10 '>
                    <div className=' ' >
                        <p className='text-black mb-1'>Name</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg'
                            placeholder='Name'
                        />
                    </div>
                </div>


                <div className='flex items-center justify-center mb-9'>
                    <div className=' ' >
                        <p className='text-black mb-1'>Publication Date</p>
                        <input
                            className='w-96 h-16 br-25 px-3 rounded-lg border-gray-500 '
                            placeholder='Publication Date'
                            
                        />
                    </div>
                </div>

                <div className=' flex items-center justify-center '>

                    <input
                        type="submit"
                        className='bg-green-400 hover:bg-green-500 h-16 w-96  mt-2 p-5s text-white rounded-lg font-bold'
                        value="Save New Game"
                    />

                

            </div>

        </div>

</div>
  )
}

export default Save;