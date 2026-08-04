import { useMutation } from "@tanstack/react-query";
import { addNewMenu } from "../../api";

export default function addNewMenuMutation() {
  return useMutation({
    mutationFn: addNewMenu,
  });
}
