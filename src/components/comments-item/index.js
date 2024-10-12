import React from 'react';
import CommentsForm from '../comments-form';
import './style.css'

const CommentsItem = props => {
  return (
    <div>
      <h2></h2>
      <div>{props.comment.text}</div>
      <div>
        {props.replies.length > 0 && (
          
          <div className='backend-comment'>
            <h3>Ответы:</h3>
            {props.replies.map(reply => (
              <CommentsItem key={reply._id} comment={reply} replies={[]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentsItem;
