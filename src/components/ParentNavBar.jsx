import React from 'react'

import { Link } from "react-router-dom";


const ParentNavBar = () => {
    return (
        <div className='bg-dark '>
            <nav className='d-flex justify-content-center p-3 '>
                <Link to="/" className='mx-5 text-decoration-none'>Home</Link>
                <Link to="/searchImage" className='text-decoration-none'>Search Image</Link>
            </nav>
        </div>
    )
}

export default ParentNavBar