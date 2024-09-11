import React from 'react'
import { useState, useEffect } from'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

    const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-600 rounded-xl border-4 border-black flex flex-col items-center
    gap-y-5 mt-[15px]'>

        <h1 className=' mt-[15px] text-2xl font-bold'>A Random GIF</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width={450} />)
        }

        <button className='w-10/12 bg-green-200 uppercase rounded-lg py-2 mb-[20px] font-bold hover:bg-green-300'
        onClick={() => fetchData()}>

        Get New GIF

        </button>

    </div>
  )
}

export default Random