import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useGetUser from "../useGetUser";
import type { UserInfo } from "../../profile.types";
import useUpdateDataUser from "../useUpdateDataUser";
import { useUploadAvatarMutation } from "../useUploadAvatarMutation";
import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";
import useRemoveAvatar from "../useRemoveAvatar";

export default function useProfileControls() {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { data: userData, isPending: isLoadingUserData } = useGetUser();
  const [editInfo, setEditInfo] = useState(false);

  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const queryClient = useQueryClient();
  const [newInfoUser, setNewInfoUser] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    phonePrimary: "",
    phoneSecondary: "",
    address: "",
    email: "",
  });

  useEffect(() => {
    if (!userData) return;

    setNewInfoUser({
      firstName: userData.data.firstName,
      lastName: userData.data.lastName,
      phonePrimary: userData.data.phonePrimary,
      phoneSecondary: userData.data.phoneSecondary,
      address: userData.data.address,
      email: userData.data.email,
    });
  }, [userData]);

  const { mutate: updateDataUser, isPending: isLoadingUpdateDataUser } =
    useUpdateDataUser();

  const { mutate: uploadAvatar, isPending: isLoadingUploadAvatar } =
    useUploadAvatarMutation();

  const { mutate: removeAvatar, isPending: isLoadingRemoveAvatar } =
    useRemoveAvatar();

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    if (!file) return;

    const options = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 400,
      useWebWorker: true,

      fileType: "image/webp",
      initialQuality: 0.8,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      setImageFile(compressedFile);

      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCanselSetImage = () => {
    setImage(null);
  };

  const handleSaveSetImage = () => {
    if (!imageFile) return;

    uploadAvatar(imageFile, {
      onSuccess: () => {
        toast.success("تم اضافه الصوره بنجاح");
        queryClient.invalidateQueries({ queryKey: ["profile"] });
        setImage(null);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const handleEditInfoUser = () => {
    const { firstName, lastName, phonePrimary, address, email } = newInfoUser;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phonePrimary.trim() ||
      !address?.trim() ||
      !email.trim()
    ) {
      toast.error("يجب التأكد من ملء جميع البيانات المطلوبة");
      return;
    }

    updateDataUser(newInfoUser, {
      onSuccess: () => {
        toast.success("تم تعديل البيانات بنجاح");
        setEditInfo(false);
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
      onError: (error) => {
        console.log(error);
        toast.error("حدث خطأ ما");
      },
    });
  };

  const handleRemoveAvatar = () => {
    const { id } = userData.data;
    removeAvatar(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["profile"],
        });
        setIsDeleteConfirmOpen(false);

        toast.success("تم حذف الصوره");
      },
      onError: (error) => {
        console.log(error);
        toast.error("حدث خطأ ما");
      },
    });
  };

  return {
    image,
    setImage,
    handleCanselSetImage,
    handleEditInfoUser,
    handleSaveSetImage,
    handleImage,
    isLoadingUpdateDataUser,
    isLoadingUploadAvatar,
    editInfo,
    isLoadingUserData,
    userData,
    newInfoUser,
    setNewInfoUser,
    setEditInfo,
    handleRemoveAvatar,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    isLoadingRemoveAvatar,
  };
}
