import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import CommentTile from '../components/CommentTile';
import BackButton from '../components/BackButton';

class ConcertShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concert: {},
      comments: []
    }
  }

  componentDidMount() {
    let concertId = this.props.params.id
    fetch(`/api/v1/concerts/${concertId}`, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        concert: body.concert,
        comments: body.comments
      })
    })
  }

  render() {
    let concertId = this.props.params.id
    let comments = this.state.comments.map(comment => {
      return (
        <CommentTile
          key={comment.id}
          id={comment.id}
          first_name={comment.first_name}
          last_name={comment.last_name}
          concert_id={comment.concert_id}
          user_id={comment.user_id}
          text={comment.text}
        />
      )
    })

    return (

      <div>
        <div>
          <div>
            <h1>{this.state.concert.artist}</h1>
            <h5>{this.state.concert.start_date} - {this.state.concert.venue}<a href={this.state.concert.ticket_url}> - Buy a Ticket!</a></h5>

          </div>

        </div>

        <h3>Comments</h3>
        {comments}
        <a className="button" href={`/concerts/${this.props.params.id}/comments/new`}>Add New Comment</a>
      </div>
    )
  }
}

export default ConcertShowContainer;
