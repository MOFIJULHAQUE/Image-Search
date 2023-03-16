import React from 'react'

const Image = ({ data }) => {
    return (
        <>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4  ">

                {/* <div class="col"> */}
                <a href={data.urls.regular} target="_blank">
                    <img src={data.urls.small} alt={data.alt_description} height="200px" className='object-fit-none border rounded'
                     />
                </a>
                {/* </div> */}
            </div>

        </>
    )
}

export default Image