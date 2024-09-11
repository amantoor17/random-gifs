import React from 'react'
import { useState, useEffect } from'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

    const [tag, setTag] = useState('');
    const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-600 rounded-xl border-4 border-black flex flex-col items-center
    gap-y-5 mt-[15px]'>

        <h1 className=' mt-[15px] text-2xl font-bold uppercase'>Random {tag} GIF</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width={450} />)
        }

        <input 
            className='w-10/12 rounded-lg py-2 mb-[1px] text-center'
            onChange={(event) => setTag(event.target.value)}
            value={tag}
        />

        <button className='w-10/12 bg-green-200 uppercase rounded-lg py-2 mb-[20px] font-bold hover:bg-green-300'
        onClick={() => fetchData(tag)}>

        Search New GIF

        </button>

    </div>
  )
}

export default Tag