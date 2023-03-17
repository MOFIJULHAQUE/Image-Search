import React from 'react'

import "../styles/image.css"

const Image = ({ data }) => {
    return (
        <>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4  image__section">

                <div class="col">
                <a href={data.urls.regular} target="_blank">
                    <img src={data.urls.small} alt={data.alt_description}
                     />
                </a>
                </div>
            </div>

        </>
    )
}

export default Image