import React from 'react'
import { useState, useEffect } from 'react'
export const useGetData = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
    fetch("https://api.github.com/users/hadley/orgs")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return { "error": error };
  } else if (!isLoaded) {
    return { "loading": isLoaded };
  } else {
    return { "data": items };
  }
}
