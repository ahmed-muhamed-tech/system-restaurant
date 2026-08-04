import { useMutation } from "@tanstack/react-query";
import { deleteCurrentMenu } from "../../api";

export default function deleteCurrentMenuMutation(){
    return useMutation({
        mutationFn: deleteCurrentMenu
    })
}