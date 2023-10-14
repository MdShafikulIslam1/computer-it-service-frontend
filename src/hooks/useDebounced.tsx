"use client";
import { useState, useEffect } from "react";
interface IDebounceProps {
  searchQuery: string;
  delay: number;
}
export const useDebounced = ({ searchQuery, delay }: IDebounceProps) => {
  const [debounceValue, setDebounceValue] = useState<string>(searchQuery);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchQuery);
    }, delay);
    return () => clearTimeout(handler);
  }, [searchQuery, delay]);
  return debounceValue;
};
