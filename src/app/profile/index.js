import { memo, useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import PageLayout from '../../components/page-layout';
import Navigation from '../../containers/navigation';
import Head from '../../components/head';
import ProfileDescription from '../../components/profile-description';

function Profile() {
  const store = useStore();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const select = useSelector(state => ({
    name: state.sign.name,
    phone: state.sign.phone,
    email: state.sign.email,
  }));

  console.log(select.userData);

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Navigation />
      <ProfileDescription name={select.name} phone={select.phone} email={select.email} />
    </PageLayout>
  );
}

export default memo(Profile);
