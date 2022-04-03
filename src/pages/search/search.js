import { useState, useEffect } from "react";
import axios from "axios";
// import Home from "../home/home.js";
import Card from "../../component/card/card.jsx";
import FormSubmission from "../../component/form/form.jsx";
import { url } from "../login/login.js";

const Search = ({accessToken})=> {
   const [tracksData, setTracksData] = useState([]);
   const [query, setQuery] = useState();
   const [selectedTracks, setSelectedTracks] = useState([]);
   const [mergedTracks, setMergedTracks] = useState([]);
   
   useEffect (() =>{
    const mergedTracksWithSelectedTracks = tracksData.map((track) =>({
      ...track,
        isSelected: !!selectedTracks.find((selectedTrack) => selectedTrack === track.uri),
      }));
      setMergedTracks(mergedTracksWithSelectedTracks);
  },[selectedTracks,tracksData]);

   ///search tracks aka card///
   
   ///select handler///
   const handleSelectTrack = (uri)=>{
    const alreadySelected = selectedTracks.find(selectedTrack => selectedTrack === uri)
      if (alreadySelected){
        setSelectedTracks(selectedTracks.filter(selectedTrack => selectedTrack !== uri))
      }
      else {
        setSelectedTracks((selectedTracks)=>[...selectedTracks,uri])
      }
      console.log(selectedTracks);
  };
  ///select handler///
   
   const handleInput = (e) => { 
    setQuery(e.target.value)
    }

   const searchCard = async () =>{
    try {
      const cards = await axios
      .get(
        `http://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
      )
      setTracksData(cards.data.tracks.items);
     console.log(cards);
    } catch (error) {
      console.log('error');
    } 
   }
   ///search tracks aka card///

  const renderTracks =() =>{
    return (
      <div className="container">
        {mergedTracks.map((card) => {
          const {uri} = card;
          return(
            <Card onSelectTrack={handleSelectTrack} key={uri} item={card}/>
          )
        })}
      </div>
    );
  };

   ///user & form handler///
   const [user, setUser] = useState({
    displayName: '',
    imagesUrl: '',
    user_id: undefined
   })

   const getUserData = async () => {
    try {
      const data = await axios
        .get(
            `https://api.spotify.com/v1/me?access_token=${accessToken}`
        )
        setUser({ ...user, displayName: data.data.display_name, imagesUrl: data.data.images[0].url, user_id: data.data.id })
        console.log(data);
    } catch (error) {
      console.log('get user data error');
    }
   }

   const [addPlaylist, setAddPlaylist] = useState({
    name: '',
    description: '',
   })

   const [playlistID, setPlaylistID] = useState(url);
   const bodyParams = {
    name: addPlaylist.name,
    description: addPlaylist.description,
    collaborative: false,
    public: false
   }

   const header = {
    Authorization: `Bearer ${accessToken}`
   }

   const handleAddPlaylistChange = e => {
    const { name, value } = e.target;
    setAddPlaylist({ ...addPlaylist, [name]: value })
   }

   const handleAddPlaylistSubmit = async e => {
    e.preventDefault();
    console.log(addPlaylist);
    await axios
        .post(
            `https://api.spotify.com/v1/users/${user.user_id}/playlists`, bodyParams,
            {
                headers: header
            }
        )
        .then((response) => (
            handleAddItemToPlaylist(response.data.id)))
        .catch((error) => error)
   }

   ///add songs to playlist///
   const itemParams = {
    uris: selectedTracks
   }

  const handleAddItemToPlaylist = async (id) => {
    setPlaylistID(id);
    const data = await axios
        .post(
            `https://api.spotify.com/v1/playlists/${id}/tracks`, itemParams,
            {
                headers: header
            }
        )
        .catch((error) => error)
    console.log(data);
   }
   ///add songs to playlist///

  //  const [user, setUser] = useState({
  //   name: '',
  //   description: '',
  //   public: true
  // });
  
  //  const handleFormChange = (e) => {
  //   const {name, value} = e.target;
  //   setUser({...user, [name]: value})
  // }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const uris = selectedTracks.map(item=>item.uri);

  //   const playlistRequest ={
  //     name: user.name,
  //     description: user.description,
  //     public: false,
  //   }

  //   axios.get("https://api.spotify.com/v1/me",
  //   {headers: {Authorization: `Bearer ${accessToken}`,}})
  //   .then((response) =>{
  //     axios.post(`https://api.spotify.com/v1/users/${response.data.id}/playlists`, playlistRequest,
  //     {headers: {Authorization: `Bearer ${accessToken}`,}} )
  //       .then((response) =>{
  //         axios.post(`https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
  //         { uris: uris }, {headers: {Authorization: `Bearer ${accessToken}`,}})
  //       })
  //   })
  // }
  ///form handler///

    return (
        <>
            <div className="search-section">
                <h1>Search Song</h1>
                <input placeholder="Artists, songs, or podcasts" onChange={handleInput}/>
                <button onClick={searchCard}>Search</button>
                <h2>Logged in as: {user.displayName}</h2>
                <button onClick={getUserData}>Connect Your Spotify</button>
                <FormSubmission
                    handleAddPlaylistChange={handleAddPlaylistChange}
                    handleAddPlaylistSubmit={handleAddPlaylistSubmit}
                    addPlaylist={addPlaylist}
                    playlistID={playlistID}
                    selectedTracks={selectedTracks}/>
                <>{renderTracks()}</>
            </div>
        </>
      );
  };
  export default Search;
