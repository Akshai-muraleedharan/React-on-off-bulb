import React, { useState } from 'react'

function Bulblight() {
 const [img,setImage] =useState(true)

 const clickHandler = () => setImage(!img);
     

  return (
    <>
    <div className="app-container"> 
      <img className="img" src={img ? "./efqo83jo.png" : "./bulb01.jpg"} alt='bulb' />
        <button onClick={clickHandler}>< span className={img ? "red_color" : "green_color"}></span> <span className='on_off'>{img ? "OFF" : "ON"}</span></button>
    </div>
    </>
  )
}

export default Bulblight
