import { useState } from "react";
import axios from "axios";
import Home from "../home/index.js";

const Search = ({accessToken})=> {
   const [data, setData] = useState([]);
   const [query, setQuery] = useState();
   
   const handleInput = (e) => { 
    setQuery(e.target.value)
    }

   const searchCard = async (e) =>{
    try {
      const cards = await axios.get(
        `http://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
      )
      setData(cards.data.tracks.items);
     console.log(cards);
    } catch (error) {
      console.log('error');
    } 
   }

    return (
        <>
            <div className="search-section">
                <h1>Search Song</h1>
                <input placeholder="Artists, songs, or podcasts" onChange={handleInput}/>
                <button onClick={searchCard}>Search</button>
                <Home tracks = {data}/>
            </div>
        </>
      );
  };
  export default Search;