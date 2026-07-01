import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api";

export default function useGetUser(){
    return useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    })
}