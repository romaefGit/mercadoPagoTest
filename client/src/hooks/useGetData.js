import React from 'react'
import { useState, useEffect } from 'react'
export const useGetData = (endPoint, id = null) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  var requestUrl = global.config.api + "/" + endPoint;
  if (id != null) {
    requestUrl = global.config.api + "/" + endPoint + '/' + id
  }
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
    if (endPoint == 'products') {
      if (id != null) {
        return { "loading": isLoaded, "product": items.product };
      } else {
        return { "loading": isLoaded, "products": items.products };
      }
    }
  }
}
