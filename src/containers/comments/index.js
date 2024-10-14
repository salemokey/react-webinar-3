import React, { memo, useCallback, useEffect, useState } from 'react';
import CommentsItem from '../../components/comments-item';
import { cn as bem } from '@bem-react/classname';
import CommentsForm from '../../components/comments-form';
import useSelector from '../../hooks/use-selector';
import './style.css'

const Comments = props => {
  const cn = bem('Comments');

  const select = useSelector(state => ({
    user: state.session.user,
    exists: state.session.exists,
  }));
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
    <>
      {select.exists ? (
        <div className={cn('')}>
          <div className={cn('title')}>Комментарии ({rootComments.length})</div>
          <div className={cn('container')}>
            {rootComments.map(rootComment => (
              <CommentsItem
                level={0}
                key={rootComment._id}
                name={select.user.profile.name}
                comment={rootComment}
                replies={getReplies(rootComment._id)}
                exists={select.exists}
                onSubmit={props.onSubmit}
                id={rootComment._id}
                type="comment"
              />
            ))}
          </div>
          <div className={cn('form-title')}>Новый комментарий</div>
          <CommentsForm
            submitLabel="write"
            name={select.user.profile.name}
            onSubmit={props.onSubmit}
            id={props.articleData._id}
            type="article"
          />
        </div>
      ) : (
        `Войдите, чтобы иметь возможность комментировать`
      )}
    </>
  );
};
export default Comments;
