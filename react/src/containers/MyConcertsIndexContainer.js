import React, { Component } from 'react';
import ConcertTile from '../components/ConcertTile';
import BackButton from '../components/BackButton';


class MyConcertsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myConcerts: []
    }
    this.deleteFromMyconcertsButton = this.deleteFromMyconcertsButton.bind(this)
  }

  deleteFromMyconcertsButton(userId) {
    let myConcertsArray = [];
    fetch(`/api/v1/myconcerts/${userId}`, {
      credentials: 'same-origin',
      method: 'delete'
    })
    .then(response => response.json())
    .then(body => {
      body.forEach(event => {
        myConcertsArray.push(event)
      })
      this.setState({ myConcerts: myConcertsArray })
    })
  }

  componentDidMount() {
    let myConcertsArray = [];
    fetch(`/api/v1/myconcerts/${userId}`, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      body.forEach(event => {
        myConcertsArray.push(event)
      })
      this.setState({ myConcerts: myConcertsArray })
    })
  }

  render() {
    let events = this.state.myConcerts.map(concert => {
      let handleClick = () => {
        this.deleteFromMyconcertsButton(concert.id)
      }

      return(
        <div>
          <ConcertTile
            key={concert.id}
            id={concert.id}
            artist={concert.artist}
            venue={concert.venue}
            start_date={concert.start_date}
            ticket_url={concert.ticket_url}
            handleClick={handleClick}
          />
        </div>
      )
    })

    return (
      <div>
        <BackButton />
        {events}
      </div>
    )
  }
}



export default MyConcertsIndexContainer;
