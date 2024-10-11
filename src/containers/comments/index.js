import React, { useEffect } from 'react';
import CommentsItem from '../../components/comments-item';
import commentsActions from '../../store-redux/comments/actions';
import useInit from '../../hooks/use-init';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cn as bem } from '@bem-react/classname';

const Comments = props => {
  const cn = bem('comments');
  const backendComments = props.comments.filter(comment => comment.parent._type === 'comment');
  const rootComments = props.comments.filter(comment => comment.parent._type === 'article');
  console.log('rootComments', rootComments, 'backendComments', backendComments);

  const getReplies = _id => {
    return backendComments.filter(comment => comment.parent._id === _id);
  };
  // useEffect(() => {
  //   dispatch(commentsActions.load(props.id));
  // }, [props.id]);

  return (
    <div className={cn('')}>
      <div className={cn('title')}>Comments</div>
      <div className={cn('container')}>
        {rootComments.map(rootComment => (
          <CommentsItem key={rootComment._id} comment={rootComment} replies={getReplies(rootComments._id)}/>
        ))}
      </div>
    </div>
  );
};
export default Comments;
