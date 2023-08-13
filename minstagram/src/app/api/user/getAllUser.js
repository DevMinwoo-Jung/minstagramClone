import useSWR from "swr";

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  return res.json();
};

export function useUser() {
  const { data, error, isLoading } = useSWR("/api/user/", fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}