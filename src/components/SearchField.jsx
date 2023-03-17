import { useState, useContext } from 'react'
import { ImageContext } from '../App';

const SearchField = () => {

    const [searchvalue, setSearchValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionClicked, setSuggestionClicked] = useState(false); // new state variable

    // context
    const { fetchData, setSearchImage } = useContext(ImageContext)

    const handleInputChange = async (e) => {
        const query = e.target.value;
        setSearchValue(query);
        setSuggestionClicked(false); // reset suggestionClicked

        if (query) {
            const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=VOGHC84n13kR4u5a9iGRBIiDYIbB4Bd-iPrMPyQXvLk`);
            const data = await response.json();
            const suggestions = data.results.slice(0, 5).map(result => result.description || result.alt_description);
            setSuggestions(suggestions);
        } else {
            setSuggestions([]);
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchValue(suggestion);
        handleButtonSearch();
        setSuggestionClicked(true); // set suggestionClicked to true
    }

    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchvalue}&client_id=VOGHC84n13kR4u5a9iGRBIiDYIbB4Bd-iPrMPyQXvLk`)
        setSearchValue("");
        setSearchImage(searchvalue)
        setSuggestionClicked(false); // reset suggestionClicked
    }

    const handleEnterSearch = (e) => {
        if (e.key === "Enter") {
            handleButtonSearch();
            setSuggestionClicked(false); // reset suggestionClicked
        }
    }

    return (
        <div className='container text-center pb-5'>
            <div style={{ position: 'relative' }}>
                <input
                    type="search"
                    className='form-control'
                    placeholder='Search anything...'
                    value={searchvalue}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterSearch}
                />
                {!suggestionClicked && suggestions.length > 0 && ( // only render the list if a suggestion hasn't been clicked
                    <div style={{ position: 'absolute', top: '100%',cursor:"pointer", left: '0', right: '0', zIndex: '1' }}>
                        <ul className="list-group">
                            {suggestions.map(suggestion => (
                                <li key={suggestion} className="list-group-item" onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <button
                disabled={!searchvalue}
                onClick={handleButtonSearch}
                className='btn btn-primary my-3'>Search Images</button>
        </div>
    )
}

export default SearchField;






