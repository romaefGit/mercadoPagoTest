import React from 'react'
import { useState, useEffect } from 'react'
export const useGetData = (endPoint, id = null, withDesc = false) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState();

  var requestUrl;
  if (id != null) requestUrl = global.config.api + "/" + endPoint + '/' + id
  if (id != null && withDesc) requestUrl = global.config.api + "/" + endPoint + '/' + id + '/description'
  // Note: the empty deps object [] means
  // this useEffect will run once
  useEffect(() => {
    fetch(requestUrl, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
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
    if (withDesc) {
      return { "loading": isLoaded, "data": item }
    } else {
      return { "loading": isLoaded, "product": item }
    }
  }
}
