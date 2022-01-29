import './App.css';
import { Fragment, React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
//import data from './countries.json';


function App() {

  return (
    <Router>
      <Fragment>
        <Navbar /> 
        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path="/">
                <CountriesList/>
              </Route>
              <Route path="/countries/:code">
                <CountryDetails/>
              </Route>
            </Switch>
            </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
