import { memo } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function ItemControl() {
  return (
    <div className="Item-control">
      <Link to={'/'}>Главная</Link>
    </div>
  );
}

export default memo(ItemControl);
