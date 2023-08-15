import '../App.css'
import { Link } from 'react-router-dom'

const Creator = (id, name, url, description) =>  {
// Displaying the content creator's name, URL, description, and image

  return (
      <div className="Creator">
          <p className='name'>{name}</p>
          <Link to={`/detailView/${id}`} key={id} className='detailPg'>{name}</Link>
          <a href={url} target="_blank" rel="noopener noreferrer" className='url'>
          YouTube
          </a>
          <p className='desc'> {description}</p>
      </div>
  );
};

export default Creator;