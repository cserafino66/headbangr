import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';

class CommentTile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let editLink = `/concerts/${this.props.concert_id}/comments/${this.props.id}/edit`;

    return(
      <div className="callout" id={this.props.id}>
        <div className="row">
          <div className="columns small-8">
            <h5>Commenter: {this.props.first_name} {this.props.last_name}</h5>
            <h5>{this.props.text}</h5>
          </div>
          <div className="columns small-4">
            <a href={editLink}>Edit Comment</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentTile;
