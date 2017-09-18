import React, { Component } from 'react';
import ConcertTile from '../components/ConcertTile';
import NavBar from '../components/NavBar';

class ConcertsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      myConcerts: [],
      zipCode: ''
    }

    // this.saveConcertsToDatabase = this.saveConcertsToDatabase.bind(this)
    this.addToMyconcertsButton = this.addToMyconcertsButton.bind(this)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchFunction = this.searchFunction.bind(this)
  }

  addToMyconcertsButton(payload) {
    // payload needs to be id of concertTile that was clicked, going to be a fetch, with a post, to the api/v1/myconcerts, same origin credentials. see below, when setting state of myConcerts, it will need to have the ellipses in order to add on to the array.

    // fetch('/api/v1/myconcerts', {
    //   credentials: 'same-origin',
    //   method: 'post',
    //   body: JSON.stringify(payload)
    // })
    // .then(response => response.json())
    // .then(responseData => {
    //   this.setState({ myConcerts: responseData.body })
    // })
    // .catch(console.log('error'))

    this.setState({ myConcerts: [...this.state.myConcerts, payload] })
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      zipCode: this.state.zipCode
    }
    this.searchFunction(data);
  }

  handleChange(event) {
    this.setState({ zipCode: event.target.value })
  }


  searchFunction(formPayload) {
    fetch('/api/v1/concerts', {
      method: 'post',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ concerts: body })
    })
  }

  componentDidMount() {
    this.searchFunction();
  }



  render() {
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
            addToMyconcertsButton={this.addToMyconcertsButton}
          />
      </div>
      )
    })

    return (
      <div>
      <NavBar
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        zipCode={this.state.zipCode}
      />
        {events}
      </div>
    )
  }
}

export default ConcertsIndexContainer;
