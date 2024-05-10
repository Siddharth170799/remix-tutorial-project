import { useLoaderData } from '@remix-run/react'
import React, { useEffect, useState } from 'react'
import { LoaderFunction } from '@remix-run/node';
import { MetaFunction } from '@remix-run/node';
import { Meta } from '@remix-run/react';
import axios from 'axios';
import { getFilms,Film } from './films';
import useGetMovies from './useGetMovies';



////server side////
// export const loader: LoaderFunction=async({request})=>{
//    const response=await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9");
//    return response
// return await getFilms();
// const url = new URL(request.url);
// console.log(url.searchParams.get('title'));
// return await getFilms()

   
// }



///client side///

const Child2 = () => {
   
    const [data]=useGetMovies();
  return (
    <>
   <div>
     <form>
      <label className='font-bold'>
        Search {''}
        <input type='text' name='title' placeholder='type a title' className='border-2 rounded py-2 px-3'/>
      </label>
      <button type='submit' className='bg-blue-500'>Search</button>
     </form>
   </div>
    <div>
      
   { data?.map((item)=>{
    return(
      <div className='hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer'>
        <div>{item.title}</div>
        <img src={item.image} alt={item.title}/>
        </div>
    )
   })}
    </div>
    </>
  )
}

export default Child2

