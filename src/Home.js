import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';


const listBackground = {
  backgroundColor: "white",
  padding: 10
}

function Offer({
  name,
  description,
  country,
  cover,
  handleClick
}) {

  return (
    <div className='offer' style={listBackground}>
      <div className='offer__column--w150'>
        <img src={cover} alt="houses" />
      </div>
      <div>
        <h2
          onClick={() => handleClick(name)}
          style={{ cursor: "pointer" }}
        >
          {name}
        </h2>
        <p>{description}</p>
        <p>{country}</p>
      </div>
      <div className='offer__column'></div>
    </div>
  )
}

Offer.propTypes = {
  name: PropTypes.string.isRequired
}

Offer.defaultProps = {
  description: "Brakuje opisu"
}


function Home() {

  const [selectedOffer, setSelectedOffer] = useState("Cozy flat");
  // const [data, setData] = useState([]);

  useEffect(() => {
    setSelectedOffer("!!!");
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(data => setData(data))
  // }, []);

  return (
    <div className="App">
      <div>
        <h1>Wybrano: {selectedOffer}</h1>
      </div>
      <Offer
        name={"Hotel Goralski"}
        description={"Spokojne miejsce w gorach"}
        country={"Polska"}
        cover="https://picsum.photos/150/150"
        handleClick={setSelectedOffer}
      />
      <Offer
        name={"Hotel pod Jaworem"}
        country={"Polska"}
        cover="https://picsum.photos/150/150"
        handleClick={setSelectedOffer}
      />
      <Offer
        name={"Hotel na Skarpie"}
        country={"Polska"}
        cover="https://picsum.photos/150/150"
        handleClick={setSelectedOffer}
      />
      <Offer
        name={"Hotel Gdynski"}
        country={"Polska"}
        cover="https://picsum.photos/150/150"
        handleClick={setSelectedOffer}
      />
    </div>
  );
}

export default Home;
