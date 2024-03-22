import { useState, useEffect, useCallback } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Không thể lấy dữ liệu từ API");
      }
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

export default UseFetch;
