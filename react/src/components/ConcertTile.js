import React from 'react';
import { Link } from 'react-router';

const ConcertTile = (props) => {
  let onAddButtonPress = (event) => {
    let payload = {
      artist: props.artist,
      venue: props.venue,
      start_date: props.start_date,
      ticket_url: props.ticket_url,
      concert_id: props.id
    }

    props.addToMyconcertsButton(payload);
  }
  return(
    <div>
      <Link className='columns small-8' to={`/concerts/${props.id}`}>
        <div className="callout">
          <div className='columns small-8'>
            <h3>{props.artist}</h3>
            <h5>{props.venue}, {props.start_date}</h5>
          </div>
        </div>
      </Link>
      <div className="columns small-4">
        <button onClick={onAddButtonPress}>Add to My Concerts</button>
      </div>
    </div>
    )
}

export default ConcertTile;
