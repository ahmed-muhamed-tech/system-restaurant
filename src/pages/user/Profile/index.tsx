import { useEffect, useState } from "react";
import { IoFolderOpenOutline, IoLogOutOutline } from "react-icons/io5";
import user_photo from "@/assets/images/user-photo.jpg";
import { CiEdit } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder, MdKeyboardArrowLeft } from "react-icons/md";
import v2 from "@/assets/images/v2.jpeg";
import { FaMotorcycle } from "react-icons/fa6";
import useGetUser from "./hooks/useGetUser";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import type { UserInfo } from "./profile.types";
import useUpdateDataUser from "./hooks/useUpdateDataUser";
import { useQueryClient } from "@tanstack/react-query";

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const { data: userData, isPending: isLoadingUserData } = useGetUser();
  const [editInfo, setEditInfo] = useState(false);

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

  if (isLoadingUserData) return;

  const {
    firstName,
    lastName,
    email,
    phonePrimary,
    avatarUrl,
    address,
    phoneSecondary,
  } = userData.data;

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

      console.log(file);
      console.log(compressedFile);

      const imageUrl = URL.createObjectURL(compressedFile);
      setImage(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCanselSetImage = () => {
    setImage(null);
  };

  const handleSaveSetImage = () => {};

  const handleEditInfoUser = () => {
    console.log("dddddd");
    const {
      firstName,
      lastName,
      phonePrimary,
      phoneSecondary,
      address,
      email,
    } = newInfoUser;

    console.log(newInfoUser);

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
        queryClient.invalidateQueries({
          queryKey: ["user"],
        });
      },
      onError: (error) => {
        console.log(error);
        toast.error("حدث خطأ ما");
      },
    });
  };

  return (
    <div className="flex flex-col gap-5 px-4 lg:px-12 py-12">
      {/* Photo & some info */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}

        <div>
          <div className="relative w-42 h-42 lg:w-62 lg:h-62">
            <img
              src={image ?? avatarUrl ?? user_photo}
              alt="user-photo"
              className="w-full h-full rounded-full object-cover"
            />

            <label
              htmlFor="profile-image"
              className="
                absolute bottom-2 right-2
                flex items-center justify-center
                w-10 h-10 lg:w-12 lg:h-12
                rounded-full
                bg-white shadow-lg
                border border-gray-200
                cursor-pointer
                hover:bg-primary
                hover:text-white
                transition-all duration-300
                "
            >
              <IoFolderOpenOutline className="text-xl" />
            </label>

            <input
              id="profile-image"
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </div>

          {image && (
            <div className="flex gap-2 items-center w-full mt-2">
              <button
                onClick={handleSaveSetImage}
                className="flex-1 cursor-pointer text-center py-1 text-lg rounded-md bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200"
              >
                حفظ
              </button>
              <button
                className="flex-1  cursor-pointer text-center py-1 text-lg rounded-md bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200"
                onClick={handleCanselSetImage}
              >
                الغاء
              </button>
            </div>
          )}
        </div>

        {/* Name & Phone & Gmail */}
        <div className="flex flex-col gap-2 ">
          {editInfo ? (
            <div className="flex gap-2 items-center">
              <input
                type="text"
                className="py-1 px-4 text-lg rounded-md outline-none border border-primary"
                placeholder="الاسم الاول"
                value={newInfoUser.firstName}
                onChange={(e) =>
                  setNewInfoUser({ ...newInfoUser, firstName: e.target.value })
                }
              />
              <input
                type="text"
                className="py-1 px-4 text-lg rounded-md outline-none border border-primary"
                placeholder="الاسم الاخير"
                value={newInfoUser.lastName}
                onChange={(e) =>
                  setNewInfoUser({ ...newInfoUser, lastName: e.target.value })
                }
              />
            </div>
          ) : (
            <h2 className="text-2xl font-bold">
              {`${firstName} ${lastName}`}{" "}
            </h2>
          )}

          {editInfo ? (
            <input
              type="text"
              placeholder="الرقم الاساسي"
              className="py-1 px-4 text-lg rounded-md outline-none border border-primary"
              value={newInfoUser.phonePrimary}
              onChange={(e) =>
                setNewInfoUser({ ...newInfoUser, phonePrimary: e.target.value })
              }
            />
          ) : (
            <h4 className="text-lg font-medium text-gray-800">
              {phonePrimary}
            </h4>
          )}

          {editInfo ? (
            <input
              type="text"
              placeholder="الرقم البديل"
              className="py-1 px-4 text-lg rounded-md outline-none border border-primary"
              value={
                newInfoUser.phoneSecondary ? newInfoUser.phoneSecondary : ""
              }
              onChange={(e) =>
                setNewInfoUser({
                  ...newInfoUser,
                  phoneSecondary: e.target.value,
                })
              }
            />
          ) : (
            phoneSecondary && (
              <h4 className="text-lg font-medium text-gray-800">
                {phoneSecondary}
              </h4>
            )
          )}

          {editInfo ? (
            <input
              type="text"
              placeholder="العنوان"
              className="py-1 px-4 text-lg rounded-md outline-none border border-primary"
              value={newInfoUser.address ? newInfoUser.address : ""}
              onChange={(e) =>
                setNewInfoUser({ ...newInfoUser, address: e.target.value })
              }
            />
          ) : (
            address && (
              <h4 className="text-lg font-medium text-gray-800">{address}</h4>
            )
          )}

          {editInfo ? (
            <input
              type="text"
              placeholder="البريد الالكتروني"
              className="py-1 px-4 text-lg rounded-md outline-none border border-primary"
              value={newInfoUser.email}
              onChange={(e) =>
                setNewInfoUser({ ...newInfoUser, email: e.target.value })
              }
            />
          ) : (
            <h4 className="text-lg font-medium text-gray-800">{email}</h4>
          )}

          {editInfo ? (
            <div className="flex gap-2 items-center w-full mt-2">
              <button
                onClick={handleEditInfoUser}
                className="flex-1 cursor-pointer text-center py-1 text-lg rounded-md bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200"
              >
                {isLoadingUpdateDataUser ? "جاري التعديل" : "تعديل"}
              </button>
              <button
                className="flex-1  cursor-pointer text-center py-1 text-lg rounded-md bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200"
                onClick={() => {
                  setNewInfoUser({
                    firstName: firstName,
                    lastName: lastName,
                    phonePrimary: phonePrimary,
                    phoneSecondary: phoneSecondary,
                    address: address,
                    email: email,
                  });
                  setEditInfo(false);
                }}
              >
                الغاء
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditInfo(true)}
              className="border border-primary py-2 px-4 text-lg flex items-center gap-1 rounded-2xl hover:bg-primary hover:text-white hover:font-black transition-all duration-200"
            >
              <span>تعديل الملف الشخصي</span>
              <CiEdit />
            </button>
          )}
        </div>
      </div>

      {/* count actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-4 rounded-xl flex flex-col items-center bg-white/70 shadow-2xl shadow-blue-200">
          <div className="bg-blue-200 rounded-full text-blue-600 w-12 h-12 flex justify-center items-center">
            <LuShoppingCart />
          </div>
          <h3 className="mt-3 text-2xl font-bold">43</h3>
          <h3 className="text-2xl text-gray-800">اجمالي الطلبات</h3>
        </div>

        <div className="p-4 rounded-xl flex flex-col items-center bg-white/70 shadow-2xl shadow-red-200">
          <div className="bg-red-200 rounded-full text-red-600 w-12 h-12 flex justify-center items-center">
            <MdFavoriteBorder />
          </div>
          <h3 className="mt-3 text-2xl font-bold">43</h3>
          <h3 className="text-2xl text-gray-800">المفضله</h3>
        </div>
      </div>

      {/* Orders */}
      <div className="bg-white/60 py-6 px-4">
        {/* head */}
        <div className="text-3xl mb-4 flex justify-between items-center border-b border-primary pb-3">
          <div className="flex items-center gap-2">
            <FaMotorcycle className="text-4xl" />
            <h2>طلباتي</h2>
          </div>
          <div className="text-lg flex items-center gap-1 cursor-pointer hover:transform hover:-translate-x-1 transition-all duration-200">
            <h3>عرض الكل</h3>
            <MdKeyboardArrowLeft />
          </div>
        </div>
        {/* content */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map(() => (
            <div className="shadow-2xl shadow-gray-300 text-center p-4 flex justify-between items-center">
              {/* Image */}
              <div className="w-52 h-42 overflow-hidden rounded-2xl">
                <img
                  src={v2}
                  alt="image-product"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title & Date */}
              <div className="text-lg font-medium">
                <h3 className="mb-1 text-xl">جبنه مشكل</h3>
                <h3>12.4.2025</h3>
              </div>

              {/* Price & State */}
              <div className="text-lg font-medium">
                <h3 className="mb-1">124ج</h3>
                <h3 className="bg-green-100 rounded-md text-green-600 py-1 px-3 text-sm">
                  تم التوصيل
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More options */}
      <div className="bg-white/60 py-6 px-4 flex flex-col gap-4">
        <div className="p-2 bg-white flex items-center gap-2 text-xl border-b border-gray-400 hover:pr-4 transition-all duration-200 cursor-pointer">
          <IoLogOutOutline />
          <h4>تسجيل الخروج</h4>
        </div>
        <div className="p-2 bg-white flex items-center gap-2 text-xl border-b border-gray-400 hover:pr-4 transition-all duration-200 cursor-pointer">
          <IoLogOutOutline />
          <h4>تسجيل الخروج</h4>
        </div>
        <div className="p-2 bg-white flex items-center gap-2 text-xl border-b border-gray-400 hover:pr-4 transition-all duration-200 cursor-pointer">
          <IoLogOutOutline />
          <h4>تسجيل الخروج</h4>
        </div>
        <div className="p-2 bg-white flex items-center gap-2 text-xl border-b border-gray-400 hover:pr-4 transition-all duration-200 cursor-pointer">
          <IoLogOutOutline />
          <h4>تسجيل الخروج</h4>
        </div>
      </div>
    </div>
  );
}
