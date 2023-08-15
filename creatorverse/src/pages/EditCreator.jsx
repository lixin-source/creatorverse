import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    async function fetchCreator() {
      try {
        const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setName(data.name);
          setUrl(data.url);
          setDescription(data.description);
          setImgUrl(data.imageURL);
        }
      } catch (error) {
        console.error('Error fetching creator:', error);
      }
    }

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { data, error } = await supabase
      .from('creators')
      .update({
        name,
        url,
        description,
        imageURL: imgUrl,
      })
      .eq('id', id);
  
    if (error) {
      console.error('Error updating creator:', error);
    } else {
      console.log('Creator updated:', data);
    }
  };

  return (
    <div>
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit}>
      <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            URL:
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          </label>
          <br />
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <br />
          <label>
            Image URL:
            <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
          </label>
          <br />
        <button type="submit">Update Creator</button>
      </form>
    </div>
  );
};

export default EditCreator;
