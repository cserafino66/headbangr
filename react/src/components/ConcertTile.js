import React from 'react';
import { Link } from 'react-router';

const ConcertTile = (props) => {

  return(
    <div>
      <Link to={`/concerts/${props.id}`}>
        <div className="callout">
          <div className='row'>
            <div className='small-8 columns'>
              <h3>{props.artist}</h3>
              <h5>{props.venue}, {props.start_date}</h5>
              <h6>{props.ticket_url}</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
    )
}

export default ConcertTile;
