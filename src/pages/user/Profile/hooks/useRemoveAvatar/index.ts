import { useMutation } from "@tanstack/react-query";
import { removeAvatar } from "../../api";

export default function useRemoveAvatar(){
    return useMutation({
        mutationFn: removeAvatar,
    })
}