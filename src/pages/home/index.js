import Card from "../../component/card";
import { useState, useEffect } from "react";

const Home = ({tracks}) => {
  const [selectedTrack, setSelectedTrack] = useState([]);
  const [mergedTracks, setMergedTracks] = useState([]);

  const handleSelectTrack = (uri)=>{
    const alreadySelected = selectedTrack.find(t => t.uri === uri)
    if (alreadySelected){
      setSelectedTrack(selectedTrack.filter(t => t.uri === uri))
    }
    else {
      setSelectedTrack([...selectedTrack,uri])
    }
    console.log(selectedTrack);
  };

  useEffect (() =>{
    const mergedTracksWithSelectedTracks = tracks.map((uri) =>({
      ...uri,
      isSelected: selectedTrack.find((t) => t === uri),
    }));
    setMergedTracks(mergedTracksWithSelectedTracks);
  },[selectedTrack,tracks]);

  return (
    <div className="container">
      {mergedTracks.map((card) => {
        
        return(
          <Card id={card} onSelectTrack={handleSelectTrack} key={card.uri} uri={card.uri}/>
        )
      })}
    </div>
  );
};
export default Home;