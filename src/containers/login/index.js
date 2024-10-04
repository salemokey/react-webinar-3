import { memo, useCallback, useMemo } from 'react';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import LoginForm from '../../components/login-form';

/**
 * Контейнер со всеми фильтрами каталога
 */
function Login() {
  const store = useStore();

  const select = useSelector(state => ({
    login: state.sign.login,
    password: state.sign.password,
  }));

  const callbacks = {
    onLoginChange: useCallback(event => store.actions.handleLoginChange(event), [store]),
    onPasswordChange: useCallback(event => store.actions.handlePasswordChange(event), [store]),
    onLogin: useCallback(event => store.actions.handleSubmit(event), [store]),
  };

  return (
    <LoginForm
      login={select.login}
      password={select.password}
      onLoginChange={callbacks.onLoginChange}
      onPasswordChange={callbacks.onPasswordChange}
      onLogin={callbacks.onLogin}
    />
  );
}

export default memo(Login);
