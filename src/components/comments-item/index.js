import React, { useState } from 'react';
import CommentsForm from '../comments-form';
import { cn as bem } from '@bem-react/classname';
import './style.css';

const CommentsItem = props => {
  const [activeComment, setActiveComment] = useState(null);
  const isReplying = activeComment && activeComment.type === 'comment';
  const callbacks = {
    onReply: () => setActiveComment({ id: props.id, type: props.type }),
    onSubmit: data => {
      props.onSubmit({ ...data, parent: { _id: props.id, _type: props.type }, name: props.name });
      setActiveComment(null);
    },
  };

  const cn = bem('Comments-item');

  const indentStyle = { marginLeft: `${props.level * 30}px` };
  let date = `${new Date(props.comment.dateCreate).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  })} в ${new Date(props.comment.dateCreate).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })}`;


  return (
    <div className={cn('')} style={indentStyle}>
      <div className={cn('container')} >
        <div className={cn('author-date')}>
          <span className="author">{props.comment.author?.profile?.name || 'Имя не указано'}</span>{' '}
          <span className="date">{date}</span>
        </div>
        <div className={cn('text')}>{props.comment.text}</div>

        {props.exists ? (
          <div className={cn('button')} onClick={callbacks.onReply}>
            Ответить
          </div>
        ) : (
          `Войдите чтобы ответить`
        )}
      
      {isReplying && <CommentsForm onSubmit={callbacks.onSubmit} id={props.id} type="comment" />}</div>
      {props.replies.length > 0 && (
        <div className={cn('replies-list')}>
          {props.replies.map(reply => (
            <div className={cn('replies-list-item')}>
              <CommentsItem
                level={props.level + 1}
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
