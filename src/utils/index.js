import React, { useState, useEffect, useRef } from 'react';

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
      let id = setInterval(tick, delay);
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
