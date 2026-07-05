import { useMutation } from "@tanstack/react-query";
import { updateDataUser } from "../../api";
import type { UserInfo } from "../../profile.types";

export default function useUpdateDataUser() {
  return useMutation({
    mutationKey: ["dataUser"],
    mutationFn: (dataUser: UserInfo) =>
      updateDataUser(dataUser),
  });
}
