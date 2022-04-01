const Card =({item, onSelectTrack})=>{
  const {album, artists, name: songName, isSelected, uri} =item
  // const {isSelected} = id;

    // const selectSong=(e)=>{
  //   setStatus('Deselect');
  // }
  

    return(
      <div className="song-section">
        <div className="song-content">
          <img className="album" id="albumImage" src={album.images[0].url} alt={songName} height="240"/>
          <div className="song-info">
            <p className="sTitle">{songName}</p>
            <p className="sArtist">{artists.map(artist => artist.name).join(', ')}</p>
            <button className="btn select" onClick= {() => onSelectTrack(uri)}> {isSelected ? 'Deselect':'Select'} </button>
            {/* <button className="btn select" onClick= {selectSong}> {selected && <button>Deselect</button>} </button> */}
          </div>
        </div>
      </div>   
    )
}
export default Card;

// const[unselected, setUnselected] = useState('Select');
  // const[selected,setSelected] = useState('Deselect');
  // const[selected,setSelected] = useState(false);
  // const[status,setStatus] = useState();

  // const selectSong =()=>{
  //   useEffect(() => {
  //     setSelected(true);
  //   }, []);
  // }

  // const selectSong = () =>{
  //   if (unselected) {
  //     setUnselected('Deselect');
  //   }
  //   else{
  //     setSelected('Select');
  //     return(
  //       <button className="btn select" onClick={selectSong}> {selected} </button>
  //     )
  //   }
  // }