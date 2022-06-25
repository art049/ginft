import { useState } from "react";

/**
 * Hook to store objects in the local storage.
 * @param key key to store the object under
 * @returns [value, setValue]
 * stateValue:
 *   undefined: the object is not fetched yet
 *   null: the object doesn't exist in the local storage
 *   object: the object exists in the local storage
 * setValue: set the value to store.
 *   if value is null the object is removed from the local storage
 */
const useLocalStorage = <T extends Object>(
  key: string
): [T | undefined | null, (val: T | null) => void] => {
  const [stateValue, setStateValue] = useState<T | undefined | null>(() => {
    if (typeof window !== "undefined") {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        try {
          const value = JSON.parse(raw) as T;
          return value;
        } catch (e) {
          console.error("Invalid Local Storage JSON", e);
          window.localStorage.removeItem(key);
          return null;
        }
      }
      return null;
    }
  });

  const setValue = (value: T | null) => {
    if (value === null) {
      window.localStorage.removeItem(key);
    } else {
      try {
        setStateValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return [stateValue, setValue];
};

export default useLocalStorage;
