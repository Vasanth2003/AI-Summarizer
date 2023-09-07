import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz-logo" className='w-28 object-contain'/>
            <button type='button'
            onClick={()=>window.open("")}
            className='black_btn '>
                Github

            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Article<br className='max-md:hidden'/>
            <span className='orange_gradient'>GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your Reading with Summarize,an Open source article summarizer that tranforms your lengthy articles into clear and concise summaries
        </h2>


    </header>
  )
}

export default Hero