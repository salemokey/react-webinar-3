import { memo, useCallback, useMemo, useState } from 'react';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import LoginForm from '../../components/login-form';

/**
 * Контейнер со всеми фильтрами каталога
 */
function Login() {
  const store = useStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const callbacks = {
    handleOnChangeLogin: useCallback(loginValue => setLogin(loginValue), [login]),
    handleOnChangePassword: useCallback(passwordValue => setPassword(passwordValue), [password]),
    handleOnSubmit: useCallback(() => {
      store.actions.sign.signIn({ login, password });
    }, [login, password, store.actions.sign.login]),
  };

  debugger;

  return (
    <LoginForm
      login={login}
      password={password}
      onLoginChange={callbacks.handleOnChangeLogin}
      onPasswordChange={callbacks.handleOnChangePassword}
      onSubmit={callbacks.handleOnSubmit}
    />
  );
}

export default memo(Login);
