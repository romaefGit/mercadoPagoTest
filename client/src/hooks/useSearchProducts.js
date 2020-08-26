import React from 'react'
import { useState, useEffect } from 'react'
export const useSearchProducts = (name) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  var requestUrl = "/products/search/query?name=" + name;
  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
    fetch(requestUrl, {
      method: 'GET'
    })
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
    return { "loading": isLoaded, "data": items };
  }
}