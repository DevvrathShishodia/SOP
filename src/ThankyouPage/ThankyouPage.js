import React from 'react'
import "./ThankyouPage.css"
import tick from "./pngwing.com - 2023-09-01T210820.137.png"
function ThankyouPage({setConfirmed}) {
  return (
        <div className='ThankyouPage'>
    <div className='ThankyouForm'>
        <div className="logo">
            <img src={tick} alt="" />
        </div>
        <div className="greet">
            <h1>Thankyou</h1>
            <h2>Your Details has been Submitted and sent to your Email</h2>
        </div>
        <div className="btnOkay">
       <button
        onClick={setConfirmed}
        >
        Okay
      </button>
      </div>
    </div>
    </div>
  )
}

export default ThankyouPage
