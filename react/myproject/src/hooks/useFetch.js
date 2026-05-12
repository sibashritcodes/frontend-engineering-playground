/**
 * useFetch will take URL, options and give you loading, data, error
 */

function useFetch(url, options) {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const fetchData = React.useCallback(
    async (signal) => {
      try {
        setIsLoading(true);
        const result = await fetch(url, { ...options, signal });
        if (!result.ok) {
          throw new Error(`HTTP error! status: ${result.status}`);
        }
        const json = await result.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [url, JSON.stringify(options)],
  );

  React.useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => {
      controller.abort();
    };
  }, [fetchData]);

  return { isLoading, error, data };
}
