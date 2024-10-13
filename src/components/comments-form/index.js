import React, { useState } from 'react';

const CommentsForm = ({ submitLabel, onSubmit, ...props }) => {
  const [text, setText] = useState('');
  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit({ text, parent: { _id: props.id, _type: props.type } });
  };
  return (
    <form action="" onSubmit={onSubmitForm}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="comment-form-button">отправить</button>
    </form>
  );
};
export default CommentsForm;
