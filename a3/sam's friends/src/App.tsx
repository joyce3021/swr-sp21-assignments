import React, { useState, ChangeEvent } from 'react';
import './App.css';
import Filtered from './Filtered';
import Other from './Other';

function App() {
  const [search, setSearch] = useState<string>('');
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const [newFriend, setNew] = useState<string>('');
  const updateNew = (e: ChangeEvent<HTMLInputElement>) => {
    setNew(e.target.value);
  }

  const [friends, setFriends] = useState<string[]>([]);
  const addFriend = () => {
    setFriends([...friends, newFriend]);
    setNew('');
  }

  return (
    <div className="App">
      <label>Search: </label>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
      />

      <p>Search Results:</p>
      <Filtered search={search} friends={friends} />

      <p>Other Friends:</p>
      <Other search={search} friends={friends} />

      <input
        type="text"
        value={newFriend}
        onChange={updateNew}
      />
      <button onClick={addFriend}>Add friend</button>
    </div>
  );
}

export default App;
