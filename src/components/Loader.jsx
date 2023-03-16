import React from 'react'

const Loader = ({ item }) => {
    return (
        <div style={{width:"100%" ,height:"60vh",display:"flex",justifyContent:"center",alignItems:"center"}}>



            <div className="spinner-border  " role="status" >
                <span class="sr-only"></span>
            </div>
        </div>
    )
}

export default Loader