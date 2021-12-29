import React from "react";

const useFetch = () => {
  const [dataFetch, setData] = React.useState();
  const [error, setError] = React.useState();
  const [loadingFetch, setLoading] = React.useState();
  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
      setData(json);
      return {
        response,
        json,
      };
    }
  }, []);
  return { dataFetch, error, loadingFetch, request };
};

export default useFetch;
