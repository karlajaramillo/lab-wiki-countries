import {Fragment, React} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-primary mb-3 ">
      <div className="container">
        <Link 
          className="navbar-brand" 
          to="/" // go home
        >WikiCountries
        </Link>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar;

