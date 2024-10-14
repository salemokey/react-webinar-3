import React, { useState } from 'react';
import './style.css';

const CommentsForm = ({ submitLabel, onSubmit, ...props }) => {
  const [text, setText] = useState('');
  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit({ text, parent: { _id: props.id, _type: props.type }, name: props.name });
  };
  return (
    <form className="Comments-form" action="" onSubmit={onSubmitForm}>
      {props.type === 'comment' && <div className="Comments-form-title">Новый ответ</div>}
      <textarea
        className="Comments-form-textarea"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="Сommentы-form-button">отправить</button>
    </form>
  );
};
export default CommentsForm;
