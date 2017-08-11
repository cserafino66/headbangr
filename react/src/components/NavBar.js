import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';
import TextField from './TextField';

const NavBar = props => {
  return(
    <div>
      <Link className='columns small-3' to='/'>
      <h2>Headbangr</h2>
      </Link>
      <BackButton className='columns small-3'/>
      <form className='columns small-3' onSubmit={props.handleSubmit}>
        <TextField
          content={props.zipCode}
          label="Search for Concerts"
          name="search-field"
          handleChange={props.handleChange}
        />
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default NavBar;
