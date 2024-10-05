import { memo, useCallback, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import debounce from 'lodash.debounce';

function LoginForm(props) {
  const cn = bem('Login-form');

  const callbacks = {
    onLoginChange: useCallback(e => props.onLoginChange(e)),
    onPasswordChange: useCallback(e => props.onPasswordChange(e)),
  };

  return (
    <form onSubmit={props.onLogin}>
      <input name="login" onChange={callbacks.onLoginChange} value={props.login} type="text" />
      <input
        name="password"
        onChange={callbacks.onPasswordChange}
        value={props.password}
        type="password"
      />
      <button type="submit">Войти</button>
    </form>
  );
}

export default memo(LoginForm);
