import React from 'react'

export default function Question() {
  return (
    <>
    <div className='box'>
        <h2>Frequently Asked Questions</h2>
        <div className='question'>
           What is Netflix
           <button>+</button>
        </div>

        <div className='question'>
           How can I ask Netflix a question?
           <button>+</button>
        </div>

        <div className='question'>
           What is the full name of Netflix?
           <button>+</button>
        </div>

        <div className='question'>
           Who is the owner of Netflix?
           <button>+</button>
        </div>

        <div className='question'>
           How many countries is Netflix in?
           <button>+</button>
        </div>

        <div className='question'>
           Why is Netflix successful?
           <button>+</button>
        </div>
    </div>

      <div className='inp'>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <input type="text" name="" id="input" placeholder='Email address' />
        <button id='btn'>Get Started </button>
      </div>

    
    </>
  )
}
