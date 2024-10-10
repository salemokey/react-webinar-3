import React, { useEffect } from 'react';
import CommentsItem from '../../components/comments-item';
import commentsActions from '../../store-redux/comments/actions';
import useInit from '../../hooks/use-init';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cn as bem } from '@bem-react/classname';

const Comments = props => {
  const cn = bem('comments');
  // const [rootComments, root] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsActions.load(props.id));
  }, [props.id]);

  const select = useSelector(state => ({
    comments: state.comments.comments,
  }));

  // const rootComments = select.comments.filter(comment => comment.parent._id === null);
  // console.log(rootComments);
  return (
    <div className={cn('')}>
      <div className={cn('title')}>Comments</div>
      {select.comments.map(comment => {
        return <CommentsItem key={comment._id} comment={comment} />;
      })}
    </div>
  );
};
export default Comments;
