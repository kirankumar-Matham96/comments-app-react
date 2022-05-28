import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'
import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onLikeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const newCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: newCommentsList})
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="top-container">
            <div className="top-section-text-container">
              <h1 className="main-heading">Comments</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="image-small"
              />

              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <form className="form-container">
                <input
                  type="text"
                  className="name-input"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.onNameChange}
                />
                <textarea
                  className="text-area"
                  rows="6"
                  placeholder="Your Comment"
                  value={comment}
                  onChange={this.onCommentChange}
                />
                <button
                  type="submit"
                  className="add-button"
                  onClick={this.onAddComment}
                >
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image-wide"
            />
          </div>
          <div className="bottom-container">
            <hr className="hr" />
            <p className="comments-count">
              <span className="count">{commentsList.length}</span> Comments
            </p>
            <ul className="comments-container">
              {commentsList.map(eachComment => (
                <CommentItem
                  commentDetails={eachComment}
                  key={eachComment.id}
                  onLikeComment={this.onLikeComment}
                  onDeleteComment={this.onDeleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
