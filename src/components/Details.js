import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'

import styled from 'styled-components';

const StyledDetails = styled.div`
  transform: scale(w) rotateZ(180deg);
  background-color: ${pr => pr.theme.primaryColor};

  p {
    color: ${pr => pr.theme.tertiaryColor};
  }

  h2 {
    color: ${pr => pr.theme.secondaryColor};
  }
`;

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  // 👉 TASK 4 - Create a side effect 🥇 that runs only after first render.
  useEffect(() => {
    console.log('🥇 after first render!');
    return () => console.log('🥇 Cleanup');
  }, [])
  // 👉 TASK 5 - Create a side effect 👻 that runs only after first render
  // and puts a 'click' event handler on document.
  // See what happens if we don't clean up.
  useEffect(() => {
    console.log('👻 adding event listener');
    const sillyEventListener = () => {
      console.log("AHHHHHHHH");
    }
    document.addEventListener('click', sillyEventListener);

    return () => {
      console.log('CLEANING UP');
      document.removeEventListener('click', sillyEventListener);
    }
  }, [])
  // 👉 TASK 6 - Create a side effect 🥵 that runs after every render.
  useEffect(() => {
    console.log('🥵 running after every render');
    return () => console.log('🥵 Cleanup');
  })

  // 👉 TASK 7 - Create a side effect 📲 that runs when a particular variable changes:
  // Whenever props.friendId updates we should trigger a fetch for details of the friend.
  // The URL should end up looking like `http://localhost:4000/friends/1?api_key=xyz`
  // On success, shove the details of the friend in `details` slice of state
  useEffect(() => {
    console.log(`Fetching friend with id ${friendId}`);
    axios.get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.error(err);
      })

      return () => console.log('cleaning up from friend fetching')
  }, [friendId]);

  return (
    <StyledDetails className='container'>
      <h2>Details (of friend with id {friendId}):</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {details.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
          </ul>
        </>
      }
      <button onClick={close}>Close</button>
    </StyledDetails>
  )
}
