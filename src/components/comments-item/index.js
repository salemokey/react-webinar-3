import React, { useState } from 'react';
import CommentsForm from '../comments-form';
import './style.css';

const CommentsItem = props => {
  const [activeComment, setActiveComment] = useState(null);
  const isReplying = activeComment && activeComment.type === 'comment';
  const callbacks = {
    onReply: () => setActiveComment({ id: props.id, type: props.type }),
    onSubmit: (data) => {
      
      props.onSubmit({ ...data, parent: { _id: props.id, _type: props.type } });
      setActiveComment(null); 
    }
  };

  return (
    <div>
      <div>
        <h2>{props.comment.author?.profile?.name || 'Имя не указано'}</h2>
        <h3>{props.comment.dateCreate}</h3>
      </div>
      <div>{props.comment.text}</div>

      {props.exists ? <div onClick={callbacks.onReply}>reply</div> : `Войдите чтобы ответить`}
      {isReplying && <CommentsForm onSubmit={callbacks.onSubmit} id={props.id} type={props.type} />}
      {props.replies.length > 0 && (
        <div className="backend-comment">
          <h3>Ответы:</h3>
          {props.replies.map(reply => (
            <div>
              <CommentsItem
                exists={props.exists}
                key={reply._id}
                id={reply._id}
                type="comment"
                onSubmit={callbacks.onSubmit}
                onReply={callbacks.onReply}
                comment={reply}
                replies={[]}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CommentsItem;
