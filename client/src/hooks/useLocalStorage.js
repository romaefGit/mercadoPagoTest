import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, pushValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  });

  const SetLocalItem = val => {
    try {
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (error) {
      console.error('The localstorage does not work on incognit tabs: ', error)
    }
    pushValue(val);
  }

  return [storedValue, SetLocalItem];
}