import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Creator = ({ creator }) => {
  return (
    <div className="Creator" style={{ backgroundImage: `url(${creator.imageURL})` }}>
  <div className="content">
    <div className="top">
      <div className="info">
        <h3 className='name'>{creator.name}</h3>
        <div className="btns">
          <Link to={`/detailView/${creator.id}`} key={creator.id} className='viewBtn'>View</Link>
          <a href={creator.url} target="_blank" rel="noopener noreferrer" className='url'>YouTube</a>
        </div>
      </div>
    </div>
    <div className="bottom">
      <p className='desc'>{creator.description}</p>
    </div>
  </div>
</div>

  );
};

Creator.propTypes = {
  creator: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Creator;
