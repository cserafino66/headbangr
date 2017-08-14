import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';
import TextField from './TextField';

const NavBar = props => {
  return(
        <div id="concert_search" className="container-fluid">
          <form className="navbar-form navbar-left" onSubmit={props.handleSubmit}>
            <div className="form-group">
              <TextField
              content={props.zipCode}
              label="Enter a Zip Code"
              name="search-field"
              handleChange={props.handleChange}
            />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
  )
}

export default NavBar;
