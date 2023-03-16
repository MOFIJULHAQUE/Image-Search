import React from 'react'

const SearchField = () => {
    return (
        <div className='container text-center pb-4'>
            <input type="search"
                className='form-control'
                placeholder='Search anything...'

            />
            <button className='btn btn-primary my-3'>Search Images</button>
        </div>
    )
}

export default SearchField;