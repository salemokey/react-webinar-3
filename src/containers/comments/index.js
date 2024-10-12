import React, { useEffect } from 'react';
import CommentsItem from '../../components/comments-item';
import { cn as bem } from '@bem-react/classname';
import CommentsForm from '../../components/comments-form';

const Comments = props => {
  const cn = bem('comments');
  const backendComments = props.comments.filter(comment => comment.parent._type === 'comment');
  const rootComments = props.comments.filter(comment => comment.parent._type === 'article');
  console.log(
    'rootComments',
    rootComments.map(item => item._id),
    'backendComments',
    backendComments,
  );

  const getReplies = _id => {
    return backendComments.filter(comment => comment.parent._id === _id);
  };

  const addComment = (text, parentId) => {
    console.log('addComment', text, parentId);
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
      <CommentsForm submitLabel="write" handleSubmit="addComment" />
    </div>
  );
};
export default Comments;
