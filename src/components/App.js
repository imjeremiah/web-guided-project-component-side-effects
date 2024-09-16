import React, { useState, useEffect } from 'react'
// 👉 TASK 1 - import the axios lib from node_modules
import axios from 'axios';
// 👉 TASK 2 - import the contants from constants/index.js
import { BASE_URL, API_KEY } from '../constants';
import Details from './Details';
import Friend from './Friend';

export default function App() {
  const [friends, setFriends] = useState([]);
  const [currentFriendId, setCurrentFriendId] = useState(null);
  const [error, setError] = useState(null);

  const openDetails = id => {
    setCurrentFriendId(id);
  }

  const closeDetails = () => {
    setCurrentFriendId(null);
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/friends?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        setFriends(res.data)
      })
      .catch(err => {
        console.error(err);
        setError('Sorry, try again soon!');
      })
  }, []);
  // 👉 TASK 3 - make an effect that runs after FIRST DOM surgery
  // caused by the first render only. You'll need `useEffect` from React.
  // The effect should consist of a call to the API using axios.
  // On success, set the array of friend objects from the API into state.

  return (
    <div className='container'>
      { error && <h1>{error}</h1> }
      <h1>Some of my friends:</h1>
      {/* start by mapping over the friends array...*/}
      {friends.map(friend => {
        return <Friend info={friend} key={friend.id} openDetails={openDetails} />
      })}
      {
        currentFriendId && <Details friendId={currentFriendId} close={closeDetails} />
      }
    </div>
  )
}
