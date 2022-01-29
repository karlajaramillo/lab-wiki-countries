import React, { Fragment, useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import CountriesList from "./CountriesList";

const CountriesDetails = () => {
  const {code} = useParams();
  console.log(code);
  const [country, setCountry] = React.useState()


  useEffect(() => {
    async function fetchData () {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${code}`);
      setCountry(response.data);
    }
    fetchData();
  }, [code]);

  console.log(country);
  //console.log(country.capital);

  if (!country) {
    return <p>Loading ...</p>
  }



    return (
      <Fragment>
        <div className="country-info-wrapper">
        <div className="col-7">
          <CountriesList/>
        </div>
        <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="capital">Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {country.borders.map(item => {
                  return (
                    <li key={item}>
                      <Link  to={`/countries/${item}`}>{item}</Link>
                    </li>
                  )
                })}
                  {/* <li><a href="/AND">Andorra</a></li>
                  <li><a href="/BEL">Belgium</a></li>
                  <li><a href="/DEU">Germany</a></li>
                  <li><a href="/ITA">Italy</a></li>
                  <li><a href="/LUX">Luxembourg</a></li>
                  <li><a href="/MCO">Monaco</a></li>
                  <li><a href="/ESP">Spain</a></li>
                  <li><a href="/CHE">Switzerland</a></li> */}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>


      </Fragment>

    )
}

export default CountriesDetails;