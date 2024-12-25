import React from 'react'

export default function Home() {
  return (
    <>
      <div className='containers'>
         <div className='net'>
            <h1>NETFLIX</h1>
            <button>Sign in</button>
         </div>

         <div className='heading'>
            <h1>Unlimited movies,<br /> TV shows, and more</h1>
            <p>Starts at Rs 250. Cancel anytime.</p>
         </div>

         <div className='paragraph'>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
         </div>

         <div className='inp'>
            <input type="text" name="" id="" placeholder='Email address' />
            <button>Get Started </button>
         </div>
      </div>
    </>
  )
}
