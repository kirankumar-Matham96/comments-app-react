import {differenceInMinutes} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onLikeComment, onDeleteComment} = props
  const {id, name, comment, date, isLiked} = commentDetails

  const commentAddedBefore = differenceInMinutes(new Date(), date)

  const onClickLikeButton = () => {
    onLikeComment(id)
  }

  const onClickDeleteButton = () => {
    onDeleteComment(id)
  }

  return (
    <li className="comment-item-container">
      <div className="comment-details">
        <div className="initial">
          <p className="para">{name.slice(0, 1)}</p>
        </div>
        <div className="comment-text-container">
          <div className="commenter-details-container">
            <p className="commenter-name">{name}</p>
            <p className="time-of-comment">
              {commentAddedBefore >= 1
                ? `${commentAddedBefore} minutes ago`
                : `less than a minute ago`}
            </p>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className="like-button"
          onClick={onClickLikeButton}
        >
          {isLiked ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="liked"
                className="like-img"
              />
              <p className="liked">Like</p>
            </>
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
                className="like-img"
              />
              <p className="like">Like</p>
            </>
          )}
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDeleteButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
