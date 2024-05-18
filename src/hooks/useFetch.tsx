import { useCallback, useEffect, useState } from "react";
import { Todo } from "../components/Todos";

const useFetch = <T,>(defaultValue: T = null as T) => {
  const [data, setData] = useState<T | null | Todo[]>(defaultValue);

  const fetchData = useCallback(async (url?: string) => {
    if (url && url.length > 0) {
      const response: Response = await fetch(url);
      const data: T = await response.json();
      setData(data);
    }
  }, []);

  useEffect(() => {
    fetchData();
  });

  return { data, setData, fetchData };
};

export default useFetch;
