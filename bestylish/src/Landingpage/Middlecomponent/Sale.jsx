import React from 'react'

function Sale({img,name}) {
  return (
    <div style={{marginTop:"20px "}}>
        <img width="100%" src={img} alt={name} />
    </div>
  )
}

export default Sale