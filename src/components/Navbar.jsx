import React from 'react'

const Navbar = ({ children }) => {
    return (
        <div className='bg-success'>
            <div className='text-center  '>
                <h1 className='pt-5 mb-4' >Find Photos</h1>
                {children}
            </div>
        </div>
    )
}

export default Navbar