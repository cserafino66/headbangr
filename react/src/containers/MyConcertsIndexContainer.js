import React, { Component } from 'React';
import ConcertTile from './components/ConcertTile';
import BackButton from './components/BackButton';


class MyConcertsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myConcerts: [];
    }
    this.deleteFromMyconcertsButton = this.deleteFromMyconcertsButton.bind(this)
  }

  deleteFromMyconcertsButton() {

    // DELETE call, instead of POST/GET

  }



  render() {
    let events = this.state.myConcerts.map(concert => {
      return(
        <div>
          <ConcertTile
            key={concert.id}
            id={concert.id}
            artist={concert.artist}
            venue={concert.venue}
            start_date={concert.start_date}
            ticket_url={concert.ticket_url}
            deleteFromMyconcertsButton={this.deleteFromMyconcertsButton}
          />
        </div>
      )
    })

    return (
      <div>
        <BackButton />
      </div>

      <div>
        {events}
      </div>
    )
  }
}



export default MyConcertsIndexContainer;
