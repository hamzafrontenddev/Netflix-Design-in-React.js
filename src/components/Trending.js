import React from 'react'

export default function Trending() {
  return (
    <>
    <div className='trend'>
      <h1>Trending Now</h1>
      <select name="Option" id="btn">
        <option value="btn">Pakistan</option>
        <option value="btn">Global</option>
      </select>

      <select name="Option" id="btn">
        <option value="btn">Movies</option>
        <option value="btn">TV Shows</option>
      </select>

      <div className='container'>
        <div className='card1'>
          {/* <div className="card-title">
            TITLE
          </div>

          <div className='card-body'>
            Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.
          </div> */}
        </div>

        <div className='card2'>
          {/* <div className="card-title">
            TITLE
          </div>

          <div className='card-body'>
          Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.
          </div> */}
        </div>

        <div className='card3'>
          {/* <div className="card-title">
            TITLE
          </div>

          <div className='card-body'>
            Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.
          </div> */}
        </div>

        <div className='card4'>
          {/* <div className="card-title">
            TITLE
          </div>

          <div className='card-body'>
            Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.
          </div> */}
        </div>

        <div className='card5'>
          {/* <div className="card-title">
            TITLE
          </div>

          <div className='card-body'>
            Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}
