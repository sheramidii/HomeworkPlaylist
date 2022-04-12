const Card =({item, onSelectTrack})=>{
  const {album, artists, name: songName, isSelected, uri} =item

    return(
      <div className="song-section">
        <div className="song-content">
          <img className="album" id="albumImage" src={album.images[0].url} alt={songName} height="140"/>
          <div className="song-info">
            <p className="sTitle">{songName}</p>
            <p className="sArtist">{artists.map(artist => artist.name).join(', ')}</p>
            <button className="btn select" onClick= {() => onSelectTrack(uri)}> {isSelected ? 'Deselect':'Select'} </button>
          </div>
        </div>
      </div>   
    )
}
export default Card;