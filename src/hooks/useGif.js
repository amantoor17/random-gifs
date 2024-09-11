import React from 'react'
import { useState, useEffect } from'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    
    async function fetchData(tag) {
        setLoading(true); // Start loading animation.
       
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url );
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);  // Update the state with the fetched image source.
        setLoading(false);
    }
    
    useEffect(() => {
        fetchData('dog');
    }, [])

    return {gif, loading, fetchData};

}

export default useGif