
import React from 'react'

function Headingone({text}) {
  return (
    <div style={{ margin:"20px",padding:"5px",fontFamily:'sans-serif',color:"black", textAlign:"left"}}>     
        <h1 style={{fontSize:"25px"}}>{text}</h1>
        <hr style={{width:"50px", color:"#F03425", border:"1px solid"}} />
    </div>
  )
}

export default Headingone