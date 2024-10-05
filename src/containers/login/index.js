import { memo, useCallback, useMemo, useState } from 'react';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import LoginForm from '../../components/login-form';

/**
 * Контейнер со всеми фильтрами каталога
 */
function Login({ signIn }) {
  const store = useStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeLogin = e => {
    e.preventDefault();
    setLogin(e.target.value);
  };

  const handleOnChangePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const credentials = { login, password };
    signIn(credentials);
  };

  debugger;

  return (
    <LoginForm
      login={login}
      password={password}
      onLoginChange={handleOnChangeLogin}
      onPasswordChange={handleOnChangePassword}
      onLogin={onSubmit}
    />
  );
}

export default memo(Login);
