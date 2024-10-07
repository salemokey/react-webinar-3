import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat } from '../../utils';
import './style.css';

function ProfileDescription(props) {
  const cn = bem('ProfileDescription');
  return (
    <div className={cn()}>
      <h2>Профиль</h2>
      <div className={cn('name')}>
        Имя: <b>{props.name}</b>
      </div>
      <div className={cn('phone')}>
        Телефон: <b>{props.phone}</b>
      </div>
      <div className={cn('email')}>
        email: <b>{props.email}</b>
      </div>
    </div>
  );
}

export default memo(ProfileDescription);
