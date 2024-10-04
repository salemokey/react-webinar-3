import { memo, useCallback, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import debounce from 'lodash.debounce';


function LoginForm(props) {
  const cn = bem('Login-form');
  return (
    <form onSubmit={props.onLogin}>
      <input onChange={props.onChangeLogin} value={props.login.value} type="text" />
      <input onChange={props.onChangePassword} value={props.login.value} type="text" />
      <button type="submit">Войти</button>
    </form>
  );
}



export default memo(LoginForm);
