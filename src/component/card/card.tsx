//change to tsx
import { RootObject } from "../../storagets";

interface propTrack{
  item: RootObject
  onSelectTrack: (uri: string) => void

}


const Card =({item, onSelectTrack}: propTrack)=>{
  const {album, artists, name: songName, duration_ms, isSelected, uri} =item
  const convertDuration = new Date (duration_ms);
  const minutes = convertDuration.getMinutes();
  const seconds = convertDuration.getSeconds();

    return(
      <div className="song-section">
        <div className="song-content">
          <img className="album" id="albumImage" src={album.images[0].url} alt={songName} height="140"/>
          <div className="song-info">
            <p className="sTitle">{songName}</p>
            <p className="sArtist">{artists.map(artist => artist.name).join(', ')}</p>
            <p className="sDuration">{(minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds}</p>
            <button className="btn select" onClick= {() => onSelectTrack(uri)}> {isSelected ? 'Deselect':'Select'} </button>
          </div>
        </div>
      </div>   
    )
}
export default Card;