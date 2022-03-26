const Card =(props)=>{
    return(
        <div className="song-section">
        <div className="song-content">
          <img className="album" id="albumImage" src={props.album} alt="albumImage"
          />
          <p className="sTitle">{props.title}</p>
          <p className="sArtist">{props.artist}</p>
         <button className="btn select">Select</button>
        </div>
      </div>   
    )
}
export default Card;