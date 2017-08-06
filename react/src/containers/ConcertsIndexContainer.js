import React, { Component } from 'react';
import ConcertTile from '../components/ConcertTile';

class ConcertsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: []
    }
  }

  componentDidMount() {
    fetch('http://api.jambase.com/events?zipCode=02135&radius=50&page=0&api_key=aggz2n9p2engnfa2fynn4gah')
    .then(response => response.json())
    .then(body => {
      this.setState({ concerts: body.Events })
    })
  }
//   var json = response.getContentText();
// var data = JSON.parse(json);
// Logger.log(data.title);


  render() {

    let concerts = this.state.concerts.map(concert => {
      return(
        <ConcertTile
          id={concert.Id}
          artist={concert.Artists[0]}
          venue={concert.Venue}
          start_date={concert.Date}
          ticket_url={concert.TicketUrl}
        />
      )
    })

    return (
      <div>
        {concerts}
      </div>
    )
  }
}

export default ConcertsIndexContainer;
