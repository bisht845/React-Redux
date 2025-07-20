import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './Redux/usersSlice'; // adjust the path if needed

function App() {
  const dispatch = useDispatch();

  // Fetch users when App loads
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // Get users and offer data from Redux store
  const myUsers = useSelector(state => state.users.data);
  const myOffers = useSelector(state => state.offer.offerCategory);



  const userLoading = useSelector(state => state.users.loading);
  const userError = useSelector(state => state.users.error);

  

  return (
    <>
      <div>
        <h2>Offer Category</h2>
        <ul>
          {myOffers.map((offer, index) => (
            <li key={index}>{offer.name}</li> // adjust property based on your JSON
          ))}
        </ul>

        <h2>Users</h2>
        {userLoading && <p>Loading users...</p>}
        {userError && <p>Error: {userError}</p>}
        <ul>
          {!userLoading && !userError && myUsers.map(user => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
