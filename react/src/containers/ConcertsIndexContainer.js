import React, { Component } from 'react';
import ConcertTile from '../components/ConcertTile';
import { data } from '../../exampleData';
import NavBar from '../components/NavBar';

class ConcertsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      myConcerts: [],
      zipCode: ''
    }

    this.saveConcertsToDatabase = this.saveConcertsToDatabase.bind(this)
    this.addToMyconcertsButton = this.addToMyconcertsButton.bind(this)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchFunction = this.searchFunction.bind(this)
  }

  addToMyconcertsButton(payload) {
    this.setState({ myConcerts: [...this.state.myConcerts, payload] })
  }

  handleChange(event) {
    this.setState({ zipCode: event.target.value })
  }

  searchFunction(formPayload) {
    let data = JSON.stringify(formPayload)
    fetch('/api/v1/concerts', {
      method: 'post',
      body: data
    })
    .then(response => response.json())
    .then(body => {this.setState({
      concerts: body
    })

    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      zipCode: this.state.zipCode
    }
    this.searchFunction(data);
  }


  saveConcertsToDatabase() {
    // let concert_objects = Jambase.get_events(zipCode)
    let data = {
      concerts: {
        zipCode: "02135"
      }
    }
    let jsonStringData = JSON.stringify(data)

    fetch('/api/v1/concerts', {
      method: 'post',
      body: jsonStringData
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ concerts: body })
    })
  }

  componentDidMount() {
    this.saveConcertsToDatabase();
  }



  render() {
    let events = this.state.concerts.map(concert => {
      return(
        <div className="columns small-12">
          <div className="columns small-12">
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
