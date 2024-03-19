import React from 'react'
import Errimg from '../assets/images/404.svg'
import { useNavigate } from 'react-router-dom'

const Err404 = () => {
    const navigate = useNavigate()
    const routeHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className='h-screen w-screen p-0 m-0 flex items-center justify-center'>
                <div className='h-[50vh] w-[40vw] flex items-center justify-center flex-col'>
                    <div className='h-3/4 flex items-center justify-center flex-col w-full'>
                        <img src={Errimg} alt='404' className='w-[50%]' />
                        <button className='w-[80%] bg-gradient-to-tr from-blue-600 to-blue-300 hover:bg-gradient-to-tr hover:from-blue-300 hover:to-blue-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-blue-500/40' onClick={routeHome}>Go Back </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Err404