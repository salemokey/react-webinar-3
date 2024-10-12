import React, { useState } from 'react';

const CommentsForm = ({ submitLabel, handleSubmit }) => {
  const [text, setText] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(text);
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="comment-form-button">{submitLabel}</button>
    </form>
  );
};
export default CommentsForm;
