import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import useStore from "../storeAuth";
import { fetchUserInfo } from "../api";


export const useMe = () => {
  const { setUserInfo } = useStore();

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: fetchUserInfo,
    retry: false,
  });

  useEffect(() => {
    if (data) {
      setUserInfo(data.data);
      return;
    }
    if (isError) {
      setUserInfo(null);
      return;
    }
  }, [data, isSuccess, isError, isLoading]);

  return { data, isSuccess, isLoading, isError };
};
