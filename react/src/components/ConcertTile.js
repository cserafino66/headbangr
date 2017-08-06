import React from 'react';
import { Link } from 'react-router';

const ConcertTile = (props) => {
  // let image;
  // if (props.img_url === null) {
  //   image = ""
  // } else {
  //   image = props.img_url
  // }
  // <img className='index-image' src={image} alt={props.name}></img>

  return(
    <div>
      <Link to={`/concerts/${props.id}`}>
        <div className="callout">
          <div className='row'>
            <div className='small-2 columns'>
            </div>
            <div className='small-8 columns'>
              <h3>{props.artist}</h3>
              <h5>{props.venue}, {props.start_date}, {props.ticket_url}</h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ConcertTile;
