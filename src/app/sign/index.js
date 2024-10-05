import { memo, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import PageLayout from '../../components/page-layout';
import Login from '../../containers/login';

function Sign() {
  debugger;
  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
}

export default memo(Sign);
