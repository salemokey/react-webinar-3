import { memo, useCallback, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import debounce from 'lodash.debounce';

function LoginForm(props) {
  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit();
  };
  const onLoginChange = e => {
    e.preventDefault();
    props.onLoginChange(e.target.value);
  };
  const onPasswordChange = e => {
    e.preventDefault();
    props.onPasswordChange(e.target.value);
  };

  const cn = bem('Login-form');
  return (
    <form action="" onSubmit={onSubmit}>
      <input placeholder="Логин" onChange={onLoginChange} value={props.login} type="text" />
      <input placeholder="Пароль" onChange={onPasswordChange} value={props.password} type="text" />
      <button type="submit">Войти</button>
    </form>
  );
}

export default memo(LoginForm);
