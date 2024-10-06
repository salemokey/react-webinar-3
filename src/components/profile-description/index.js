import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat } from '../../utils';
import './style.css';

function ProfileDescription(props) {
  const cn = bem('ProfileDescription');
  return (
    <div className={cn()}>
      <div className={cn('name')}>{props.userData.name}</div>
      <div className={cn('phone')}>{props.userData.phone}</div>
      <div className={cn('email')}>{props.userData.email}</div>
    </div>
  );
}

export default memo(ProfileDescription);
