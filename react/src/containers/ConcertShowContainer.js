import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import CommentTile from '../components/CommentTile';

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
        <div className="row concert-description">
          <div className="columns small-4">
            <img className='show-image' src={this.state.concert.img_url} alt={this.state.concert.artist}></img>
          </div>
          <div className="columns small-8">
            <h1>{this.state.concert.artist}</h1>
            <h5>{this.state.concert.start_date}, {this.state.concert.venue}</h5>
            <p>{this.state.concert.ticket_url}</p>
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
