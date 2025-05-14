import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid gray' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/leaderboard" style={{ marginRight: '15px' }}>Leaderboard</Link>
      <Link to="/log" style={{ marginRight: '15px' }}>Log Game</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
