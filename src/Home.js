import './App.css';

const listBackground = {
  backgroundColor: "white",
  padding: 10
}

function Offer({ name, description, country, cover }) {
  return (
    <div className='offer' style={listBackground}>
      <div className='offer__column--w150'>
        <img src={cover} alt="houses" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{country}</p>
      </div>
      <div className='offer__column'></div>
    </div>
  )
}

Offer.defaultProps = {
  description: "Brakuje opisu"
}

function Home() {
  return (
    <div className="App">
      <Offer
        name={"Hotel Goralski"}
        description={"Spokojne miejsce w gorach"}
        country={"Polska"}
        cover="https://picsum.photos/150/150" />
      <Offer
        name={"Hotel pod Jaworem"}
        country={"Polska"}
        cover="https://picsum.photos/150/150" />
      <Offer
        name={"Hotel na Skarpie"}
        country={"Polska"}
        cover="https://picsum.photos/150/150" />
      <Offer
        name={"Hotel Gdynski"}
        country={"Polska"}
        cover="https://picsum.photos/150/150" />
    </div>
  );
}

export default Home;
