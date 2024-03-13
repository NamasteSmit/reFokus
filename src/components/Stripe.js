import React from 'react'

const Stripe = ({url,number}) => {
  return (
    <div className=' w-full px-4 py-6 border-[1px] border-zinc-500 flex justify-between text-xl font-semibold'>
        <img src={url} alt="" />
        <h1>{number}</h1>
    </div>
  )
}

export default Stripe