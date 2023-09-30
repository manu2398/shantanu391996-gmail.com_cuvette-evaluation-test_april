import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useData = (endpoint, requestConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      apiClient
        .get(endpoint, { ...requestConfig })
        .then((res) => {
          setData(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.response.data.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};

export default useData;
