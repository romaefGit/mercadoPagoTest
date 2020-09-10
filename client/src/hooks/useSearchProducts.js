import React from 'react'
import { useState, useEffect } from 'react'

export const useSearchProducts = (name, limit = 0) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();

  var endPointLocal = "/products/search/query?name="
  var endPointMla = "/sites/MLA/search?q="

  var requestUrl = global.config.api + endPointMla + name
  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
    fetch(requestUrl, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          var results = [];
          if (limit > 0) { // if limit > 0 the code bellow will push the quantity of limit 
            if (response.results != []) {
              for (let index = 0; index < limit; index++) {
                let product = response.results[index]
                results.push(product)
                if (results.length == limit) {
                  break;
                }
              }
            }
            setData(results)
          } else if (limit == 0) {
            setIsLoaded(true);
            results = response.results;
            setData(results)
          }
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
    return { "loading": isLoaded, "products": data };
  }
}
