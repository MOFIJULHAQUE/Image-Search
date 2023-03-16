import { useState, useContext } from 'react'
import { ImageContext } from '../App';

const SearchField = () => {

    const [searchvalue, setSearchValue] = useState("");

    // context
    const { fetchData, setSearchImage } = useContext(ImageContext)


    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }


    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchvalue}&client_id=VOGHC84n13kR4u5a9iGRBIiDYIbB4Bd-iPrMPyQXvLk`)
        setSearchValue("");
        setSearchImage(searchvalue)

    }



    const handleEnterSearch = (e) => {
        if (e.key === "Enter") {
            fetchData(`search/photos?page=1&query=${searchvalue}&client_id=VOGHC84n13kR4u5a9iGRBIiDYIbB4Bd-iPrMPyQXvLk`)
            setSearchValue("");
            setSearchImage(searchvalue)

        }
    }
    return (
        <div className='container text-center pb-4'>
            <input
                type="search"
                className='form-control'
                placeholder='Search anything...'
                value={searchvalue}
                onChange={handleInputChange}
                onKeyDown={handleEnterSearch}


            />
            <button
                disabled={!searchvalue}
                onClick={handleButtonSearch}
                className='btn btn-primary my-3'>Search Images</button>
        </div>
    )
}

export default SearchField;