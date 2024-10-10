import React from 'react';
import CommentsForm from '../comments-form';

const CommentsItem = props => {
  return (
    <div>
      <h2>{props.comment._id}</h2>
      <div></div>
    </div>
  );
};
export default CommentsItem;
