import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountriesList = () => {

  const [countries, setCountries] = useState([]); // React.useState--> doesn't work

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
      setCountries(response.data)
      console.log(response.data)
    }
    fetchData();
    // (async function fetchData() {
    //   // You can await here
    //   const response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
    //   setCountries(response.data)
    //   console.log(response.data)
    // })() //IIFE
    
    // this fetchData function returns --> undefined, it doesn't have any 'return'
    // this fetchdata callback returns--> undefine 
    // fetch returns a promise
    // if a callback returns a function, this is the CLEANUP

  }, []);  // only once

  const countryCard = countries.map(item => {
    let alpha2CodeLower = item.alpha2Code.toLowerCase();
    return (
      <div key={item._id}>
        <Link className="list-group-item list-group-item-action" to={`/countries/${item.alpha3Code}`}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2CodeLower}.png`} alt="country"/>
            <p>{item.name.common}</p>
        </Link>
        </div>
    )
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 country-info">
          <div className="list-group">
          {countryCard}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountriesList;
