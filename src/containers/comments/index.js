import React, { useEffect } from 'react';
import CommentsItem from '../../components/comments-item';
import commentsActions from '../../store-redux/comments/actions';
import useInit from '../../hooks/use-init';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Comments = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsActions.load(props.id));
  }, [props.id]);

  const select = useSelector(state => ({
    comments: state.comments.comments,
  }));
  return (
    <div>
      <CommentsItem comments={select.comments} />
    </div>
  );
};
export default Comments;
