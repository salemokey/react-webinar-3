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
    isLogged: state.sign.isLogged,
    token: state.sign.token,
    name: state.sign.name,
  }));

  const callbacks = {
    onExit: useCallback(() => store.actions.sign.exitUser()),
  };

  return select.isLogged ? (
    <SideLayout side="end">
      <Link className='login-link' to={`/profile`}>{select.name}</Link>
      <div className="enter-btn">
      <button onClick={callbacks.onExit}>Выход</button>
      </div>
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
