import React, { memo, useCallback } from 'react';
import useStore from '../../hooks/use-store';
import { Link, useNavigate } from 'react-router-dom';
import useSelector from '../../hooks/use-selector';
import SideLayout from '../side-layout';
import './style.css';

function ProfileLink() {
  const store = useStore();
  const navigate = useNavigate();

  const select = useSelector(state => ({
    token: state.sign.token,
    userData: state.sign.userData,
  }));

  const callbacks = {
    onExit: useCallback(() => store.actions.sign.exitUser()),
  };

  return select.token ? (
    <SideLayout side="end">
      <Link to={`/profile`}>{select.userData.name}</Link>
      <button onClick={callbacks.onExit}>Выход</button>
    </SideLayout>
  ) : (
    <SideLayout side="end">
      <div className="enter-btn">
        <button onClick={() => navigate('/login')}>Войти</button>
      </div>
    </SideLayout>
  );
}

export default memo(ProfileLink);
