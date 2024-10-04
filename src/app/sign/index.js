import { memo, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import PageLayout from '../../components/page-layout';
import Login from '../../containers/login';

function Sign() {
  const store = useStore();

  const select = useSelector(state => ({
    login: state.sign.login,
    password: state.sign.password,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
  };

  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
}

export default memo(Sign);
