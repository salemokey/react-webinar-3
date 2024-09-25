import { memo } from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';
import Pagination from '../list-tool';

function List({ list, renderItem, pages }) {
  return (
    <div className="List">
      {list.map(item => (
        <div key={item._id} className="List-item">
          {renderItem(item)}
        </div>
      ))}
      <Pagination pages={pages} />
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  renderItem: PropTypes.func,
};

List.defaultProps = {
  renderItem: item => {},
};

export default memo(List);
