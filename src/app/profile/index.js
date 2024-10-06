import { memo, useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import PageLayout from '../../components/page-layout';
import Login from '../../containers/login';
import Navigation from '../../containers/navigation';
import ProfileLink from '../../components/profile-link';
import Head from '../../components/head';
import ProfileDescription from '../../components/profile-description';
import useInit from '../../hooks/use-init';

function Profile() {
  const store = useStore();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const select = useSelector(state => ({
    userData: state.sign.userData,
  }));

  debugger;
  return (
    <PageLayout>
      <Head title="Магазин" />
      <Navigation />
      <ProfileDescription userData={select.userData} />
    </PageLayout>
  );
}

export default memo(Profile);
