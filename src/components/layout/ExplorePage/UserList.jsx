import { ExploreNavBar } from './ExploreNavBar'
import './UserList.css'

// Sample data structure based on your screenshot
const users = [
  { id: 1, name: 'Maryam Amiri', role: 'Designer', starred: true },
  { id: 2, name: 'Hossein Shams', role: 'Full Stack Developer', starred: false },
  { id: 3, name: 'Sarah Conner', role: 'Support Agent', starred: false },
  { id: 4, name: 'Frank Camly', role: 'Support Agent', starred: false },
  { id: 5, name: 'Freddie Arendes', role: 'Marketing Department', starred: false },
  { id: 6, name: 'Gary Camara', role: 'Marketing Department', starred: true },
  { id: 7, name: 'Tim Hank', role: 'Marketing Department', starred: false },
  { id: 8, name: 'Fidel Tonn', role: 'Support Agent', starred: true },
];

export function UserList({ activeTag, setActiveTag }) {
  return (
    <div className="user-list-container">
      <ExploreNavBar activeTag={activeTag} setActiveTag={setActiveTag} />
      <h1>User List</h1>
      
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            {/* <div className={`star-icon ${user.starred ? 'active' : ''}`}>★</div> */}
            <img 
              src={`https://i.pravatar.cc/100?u=${user.id}`} 
              alt={user.name} 
              className="user-avatar" 
            />
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}