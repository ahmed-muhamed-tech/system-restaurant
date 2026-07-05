import { useMutation } from "@tanstack/react-query";
import { updateAvatar } from "../../api";

export function useUploadAvatarMutation() {
  return useMutation({
    mutationFn: updateAvatar,
  });
}
