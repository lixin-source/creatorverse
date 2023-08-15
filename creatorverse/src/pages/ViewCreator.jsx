import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { supabase } from '../client';
import { Link } from 'react-router-dom';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      try {
        const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setCreator(data);
        }
      } catch (error) {
        console.error('Error fetching creator:', error);
      }
    }

    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);
  
    if (error) {
      console.error(error);
    } else {
      // Redirect the user to the homepage after deleting the post
      window.location.href = '/';
    }
  };

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ViewCreator">
      <h2>{creator.name}</h2>
      <img src={creator.imageURL} alt={`${creator.name} Thumbnail`} className="creatorImage" />
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">YouTube</a>
      <Link to={`/edit/${id}`} className="editButton">Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

ViewCreator.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ViewCreator;
