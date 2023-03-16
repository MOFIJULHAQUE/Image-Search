import { useState } from "react";
import Navbar from "./components/Navbar";


import SearchField from "./components/SearchField";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";
import { createContext } from "react";


// Create Context 
export const ImageContext = createContext();

function App() {

const [searchImage,setSearchImage] = useState("")


  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=developer&client_id=VOGHC84n13kR4u5a9iGRBIiDYIbB4Bd-iPrMPyQXvLk`);


  const value = {
    response,
     isLoading,
      error,
       fetchData,
       searchImage,
       setSearchImage
  }

  console.log(response);
  return (
    <ImageContext.Provider value={value}>
      <Navbar>
        <SearchField />
      </Navbar>
      <Images />
    </ImageContext.Provider>
  );
}


export default App;
