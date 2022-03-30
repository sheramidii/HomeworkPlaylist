import Card from "../../component/card";

const Home = ({passData}) => {

  return (
    <div className="container">
      {passData.map((card) => {
        return(
            passData !== undefined && (
                <Card album={card.album.images[0].url} title={card.name} artist={card.artists[0].name} key={card.id}/>
            )
        )
      })}
    </div>
  );
};
export default Home;