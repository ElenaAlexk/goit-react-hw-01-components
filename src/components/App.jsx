//export const App = () => {
//return (
// <div
// style={{
// height: '100vh',
//display: 'flex',
//justifyContent: 'center',
//alignItems: 'center',
//fontSize: 40,
//color: '#010101',
//}}
//>
//React homework template
//</div>
//);

//import userEvent from '@testing-library/user-event';
import Profile from './Profile';
import user from '../data/user.json';
//};
export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
