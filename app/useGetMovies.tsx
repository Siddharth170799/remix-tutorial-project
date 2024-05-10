import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const useGetMovies = () => {
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    const response=async()=>{
        const response2=await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9")
        setData(response2.data.results)
        setIsLoading(true)
        console.log(response2.data)
    }
    useEffect(()=>{
        response()
    },[])
    return [data]
}

export default useGetMovies
