import { memo, useCallback, useMemo, useState } from 'react';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import LoginForm from '../../components/login-form';
import PageLayout from '../../components/page-layout';
import ProfileLink from '../../components/profile-link';
import LocaleSelect from '../locale-select';
import Navigation from '../navigation';
import Head from '../../components/head';

/**
 * Контейнер со всеми фильтрами каталога
 */
function Login() {
  const store = useStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const select = useSelector(state => ({
    errorServer: state.sign.errorServer,
  }));

  const callbacks = {
    handleOnChangeLogin: useCallback(loginValue => setLogin(loginValue), [login]),
    handleOnChangePassword: useCallback(passwordValue => setPassword(passwordValue), [password]),
    handleOnSubmit: useCallback(() => {
      store.actions.sign.signIn(login, password);
    }, [login, password, store.actions.sign.login]),
  };

  debugger;

  return (
    <PageLayout>
      <ProfileLink />
      <Head>
        <LocaleSelect />
      </Head>
      <Navigation />
      <LoginForm
        login={login}
        password={password}
        onLoginChange={callbacks.handleOnChangeLogin}
        onPasswordChange={callbacks.handleOnChangePassword}
        onSubmit={callbacks.handleOnSubmit}
        errorServer={select.errorServer}
      />
    </PageLayout>
  );
}

export default Login;
