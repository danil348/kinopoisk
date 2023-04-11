import { useState } from 'react';

export const useLocalStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const setObject = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const getObject = (key: string) => {
    const value = localStorage.getItem(key);
    return value;
  }

  const getItem = (key: string) => {
    const value = localStorage.getItem(key);
    setValue(value);
    return value;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem, getObject, setObject};
};