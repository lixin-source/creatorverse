import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Creator = ({ creator }) => {
  return (
    <div className="Creator">
      <p className='name'>{creator.name}</p>
      <img className="img" src={creator.imageURL} alt='creatorImage'/>
      <Link to={`/detailView/${creator.id}`} key={creator.id} className='detailPg'>View</Link>
      <a href={creator.url} target="_blank" rel="noopener noreferrer" className='url'> YouTube </a>
      <p className='desc'> {creator.description}</p>
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
