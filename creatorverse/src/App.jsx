import { supabase } from './client';
import { useState, useEffect } from 'react';
import './App.css'
import Creator from './components/Creator.jsx';

function App() {
  // const [count, setCount] = useState(0)
  
  const [allCreators, setAllCreators] = useState([]);

  useEffect(() => {
    fetchAllCreators();
  }, []);

  const fetchAllCreators = async () => {
    try {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.log(error);
      } else {
        setAllCreators(data);
        // console.log("fetch successcess");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
   <div className='homepg'>
      <div className="gallery">
        {allCreators.map((creator) => (
          <Creator key={creator.id} creator={creator}/>
        ))}
      </div>
   </div>
  );
}

export default App
