import { useParams } from 'react-router-dom';
import hobbies from '../data/hobbies';

const HobbyDetail = () => {
  const { id } = useParams();
  const hobby = hobbies.find(h => h.id === id);

  if (!hobby) return <div style={{ padding: '20px' }}>Hobby not found</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{hobby.title}</h1>

      {/* Main hobby image */}
      <img
        src={hobby.image}
        alt={hobby.title}
        style={{
          width: '100%',
          maxHeight: '500px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />

      {/* Optional fullscreen image */}
      {/* Only include this if you actually want a fullscreen image under the hobby */}
      {/* Make sure index.css includes the `.fullscreen-image` class */}
      {/* <img src="/images/sample.jpg" alt="Sample" className="fullscreen-image" /> */}

      <p style={{ marginTop: '20px' }}>{hobby.description}</p>
    </div>
  );
};

export default HobbyDetail;
