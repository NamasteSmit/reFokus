import React from 'react'

const Cards = () => {
  return (
    <div className=' relative w-screen h-[95%] bg-zinc-900 px-10 text-black flex gap-1'>
       <div className='border-[1px] border-zinc-600 w-[40%] mt-32 ml-32 rounded-3xl h-[50%] text-white p-2'>
        <h1 className='font-semibold'>up next news</h1>
        <h1 className='text-3xl mt-10'>Insights and Behind the Scenes</h1>
        <a href='#' className='font-thin text-zinc-500 p-3'>Explore what drives our team</a>
       </div>
       <div className='border-[1px] border-zinc-600 w-[50%] rounded-3xl h-[50%] mt-32 hover:bg-violet-500 transition duration-300 ease-linear hover:ease-in p-2'>
         <h1 className='text-thin text-zinc-300'>Get In Touch</h1>
         <h1 className='text-3xl font-semibold mt-8 text-zinc-100' >Lets Get To it Together</h1>
         <button className='mt-[28%] p-2 px-5 border-2 text-zinc-100 border-zinc-500 rounded-full'>Create Project</button>
       </div>

       <div className='absolute top-[70%] left-[12%]'>
        {
            ["Privacy Policy","Cookie Policy","Impressum","Terms"].map((ele,index)=>{
                return <a href='#' className='text-zinc-400 font-thin mr-8'>{ele}</a>
            })
        }
       </div>
    </div>
  )
}

export default Cards