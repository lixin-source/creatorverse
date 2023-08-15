import { supabase } from '../client';
import { useState } from 'react';
import '../App.css'

const AddCreator = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { data, error } = await supabase.from('creators').insert([
        {
          name,
          url,
          description,
          imageURL: imgUrl,
        },
      ]);
  
      if (error) {
        console.error('Error adding creator:', error);
      } else {
        console.log('Creator added:', data);
      }
  
      // Clear form inputs
      setName('');
      setUrl('');
      setDescription('');
      setImgUrl('');
    };
  
    return (
      <div>
        <h2>Add Creator</h2>
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
          <button type="submit">Add Creator</button>
        </form>
      </div>
    );
  };
  
  export default AddCreator;