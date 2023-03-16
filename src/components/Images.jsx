import { useContext } from 'react'
import { ImageContext } from '../App'
import Image from "./Image"
import Loader from "./Loader"

const Images = () => {
    const { response,
        isLoading, } = useContext(ImageContext)



    return (
        <>
            <div>
                <h3 className='text-center mt-2'>Results for Cats</h3>
            </div>

            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">


                    {
                       isLoading ? <Loader item={10}/> : response.map((data, key) => <Image key={key} data={data} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Images