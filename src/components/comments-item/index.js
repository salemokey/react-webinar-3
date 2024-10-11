import React from 'react';
import CommentsForm from '../comments-form';

const CommentsItem = props => {
  return (
    <div>
      <h2>ukfdysq</h2>
      <div>{props.comment.text}</div>
      <div>
        {props.replies.length > 0 && (
          <>
            <h3>replies</h3>
            {props.replies.map(reply => (
              <CommentsItem key={reply._id} comment={reply} replies={[]} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default CommentsItem;
