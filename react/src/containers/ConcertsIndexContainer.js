import React, { Component } from 'react';
import ConcertTile from '../components/ConcertTile';
import { data } from '../../exampleData'

class ConcertsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: []
    }

    this.saveConcertsToDatabase = this.saveConcertsToDatabase.bind(this)
  }

  saveConcertsToDatabase() {
    // let concert_objects = Jambase.get_events(zip_code)
    let data = {
      concerts: {
        zip_code: "02135"
      }
    }
    let jsonStringData = JSON.stringify(data)

    fetch('/api/v1/concerts', {
      method: 'post',
      body: jsonStringData
    })
    .then(response => response.json())
    .then(body => {
      debugger;
      this.setState({ concerts: body })
    })
  }

  componentDidMount() {
    debugger;
    this.saveConcertsToDatabase();
  }



  render() {
    debugger;
    let events = this.state.concerts.map(concert => {
      return(
        <div>
        <ConcertTile
          key={concert.id}
          id={concert.id}
          jambase_id={concert.jambase_id}
          artist={concert.artist}
          venue={concert.venue}
          start_date={concert.start_date}
          ticket_url={concert.ticket_url}
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
