// import Card from "../../component/card/card.jsx";
// import { useState, useEffect } from "react";

// const Home = ({tracks}) => {
//   const [selectedTracks, setSelectedTracks] = useState([]);
//   const [mergedTracks, setMergedTracks] = useState([]);

//   ///select handler///
//   const handleSelectTrack = (uri)=>{
//     const alreadySelected = selectedTracks.find(selectedTrack => selectedTrack === uri)
//     if (alreadySelected){
//       setSelectedTracks(selectedTracks.filter(selectedTrack => selectedTrack !== uri))
//     }
//     else {
//       setSelectedTracks((selectedTracks)=>[...selectedTracks,uri])
//     }
//     console.log(selectedTracks);
//   };

//   useEffect (() =>{
//     const mergedTracksWithSelectedTracks = tracks.map((track) =>({
//       ...track,
//       isSelected: !!selectedTracks.find((selectedTrack) => selectedTrack === track.uri),
//     }));
//     setMergedTracks(mergedTracksWithSelectedTracks);
//   },[selectedTracks,tracks]);
//   ///select handler///


//   const renderTracks =() =>{
//     return (
//       <div className="container">
//         {mergedTracks.map((card) => {
//           const {uri} = card;
//           return(
//             <Card onSelectTrack={handleSelectTrack} key={uri} item={card}/>
//           )
//         })}
//       </div>
//     );
//   };

 
//   return <>{renderTracks()}</>;
// };
// export default Home;