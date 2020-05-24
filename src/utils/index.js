import React, { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const getPersistedUser = () => {
  const userKey = Object.keys(window.sessionStorage)
    .filter((it) => it.startsWith('firebase:authUser'))[0];
  const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
  return user;
};

export const isLoggedIn = (firebase) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      return true;
    }
    // No user is signed in.
    return false;
  });
};
