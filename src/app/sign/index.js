import { memo, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import PageLayout from '../../components/page-layout';
import Login from '../../containers/login';

function Sign() {
  const store = useStore();

  const callbacks = {
    // Добавление в корзину
    signIn: useCallback(value => store.actions.sign.signIn(value), [store]),
  };
  debugger;
  return (
    <PageLayout>
      <Login signIn={callbacks.signIn} />
    </PageLayout>
  );
}

export default memo(Sign);
