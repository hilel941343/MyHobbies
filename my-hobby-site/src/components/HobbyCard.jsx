import { Link } from 'react-router-dom';


const HobbyCard = ({ hobby }) => (
  <div
    className="hobby-card"
    style={{
      backgroundImage: `url(${hobby.image})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textShadow: '1px 1px 3px black',
    }}
  >
    <Link to={`/hobby/${hobby.id}`} style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>
      {hobby.title}
    </Link>
    <h3>Advantages</h3>
    <ul>
      {hobby.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
    </ul>
    <h3>Disadvantages</h3>
    <ul>
      {hobby.disadvantages.map((disadv, i) => <li key={i}>{disadv}</li>)}
    </ul>
  </div>
);

export default HobbyCard;
