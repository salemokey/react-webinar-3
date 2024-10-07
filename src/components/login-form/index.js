import { memo, useCallback, useLayoutEffect, useState } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';

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
    <form action="" onSubmit={onSubmit} className={cn()}>
      <h2>Вход</h2>
      <label for={cn('login')}>Логин</label>
      <input
        placeholder="Логин"
        onChange={onLoginChange}
        value={props.login}
        type="text"
        className={cn('login')}
      />
      <label for={cn('login')}>Пароль</label>
      <input
        placeholder="Пароль"
        onChange={onPasswordChange}
        value={props.password}
        type="text"
        className={cn('password')}
      />
      <div className={cn('error')}>{props.errorServer ? props.errorServer : null}</div>
      <button type="submit" className={cn('btn')}>
        Войти
      </button>
    </form>
  );
}

export default LoginForm;
