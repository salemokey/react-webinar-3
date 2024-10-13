import React, { memo, useEffect } from 'react';
import CommentsItem from '../../components/comments-item';
import { cn as bem } from '@bem-react/classname';
import CommentsForm from '../../components/comments-form';

const Comments = props => {
  const cn = bem('comments');

  // Логирование пропсов
  console.log('Пропсы Comments:', props);

  const backendComments = props.comments.filter(
    comment => comment.parent && comment.parent._type === 'comment',
  );
  const rootComments = props.comments.filter(
    comment => comment.parent && comment.parent._type === 'article',
  );

  const getReplies = _id => {
    return backendComments.filter(comment => comment.parent && comment.parent._id === _id);
  };

  return (
    <div className={cn('')}>
      <div className={cn('title')}>Комментарии ({rootComments.length})</div>
      <div className={cn('container')}>
        {rootComments.map(rootComment => (
          <CommentsItem
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
          />
        ))}
      </div>
      <div className={cn('form-title')}>Новый комментарий</div>
      <CommentsForm submitLabel="write" onSubmit={props.onSubmit} id={props.articleData._id} />
    </div>
  );
};
export default memo(Comments);
