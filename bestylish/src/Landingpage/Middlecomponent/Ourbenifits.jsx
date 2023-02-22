import React from 'react'

function Ourbenifits({img,name}) {
    return (
        <>
        
            <div>
                <div >
                    <img style={{borderRadius:"20px"}} src={img} alt={name} />
                </div>
                
            </div>
        </>

    )
}

export default Ourbenifits