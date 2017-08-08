import React, { Component } from 'react';
import ConcertTile from '../components/ConcertTile';
import { data } from '../../exampleData'

class ConcertsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: []
    }
  }

  componentDidMount() {
    // fetch('http://api.jambase.com/events?zipCode=02135&radius=50&page=0&api_key=aggz2n9p2engnfa2fynn4gah&o=json')
    // .then(response => response.json())
    // .then(response => {
    //   console.log(response.Events);
    //   this.setState({ concerts: response.Events });
    // })
    this.setState({ concerts: data.Events })
  }



  render() {
    let events = this.state.concerts.map(concert => {
      return(
        <div>
        <ConcertTile
          key={concert.Id}
          id={concert.Id}
          jambase_id={concert.Id}
          artist={concert.Artists[0].Name}
          venue={concert.Venue.Name}
          start_date={concert.Date}
          ticket_url={concert.TicketUrl}
        />
      </div>
      )
    })

    return (
      <div>
        {events}
      </div>
    )
  }
}

export default ConcertsIndexContainer;
