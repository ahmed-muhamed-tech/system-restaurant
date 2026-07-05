import { IoFolderOpenOutline } from "react-icons/io5";
import useProfileControls from "../hooks/useProfileControls";
import { FiCheck, FiX } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import user_photo from "@/assets/images/user-photo.jpg";
import { MdDeleteOutline } from "react-icons/md";
import Confirm from "@/components/ui/Confirm";

export default function InfoUser() {
  const {
    userData,
    image,
    handleCanselSetImage,
    handleEditInfoUser,
    handleSaveSetImage,
    handleImage,
    isLoadingUpdateDataUser,
    newInfoUser,
    setEditInfo,
    setNewInfoUser,
    editInfo,
    isLoadingUploadAvatar,
    handleRemoveAvatar,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    isLoadingRemoveAvatar,
  } = useProfileControls();

  const {
    firstName,
    lastName,
    email,
    phonePrimary,
    avatarUrl,
    address,
    phoneSecondary,
  } = userData.data;

  if (isDeleteConfirmOpen) {
    return (
      <Confirm
        title="حذف الصوره"
        message="هل انت متأكد من حذف صوره الحساب"
        onConfirm={handleRemoveAvatar}
        onCancel={() => setIsDeleteConfirmOpen(false)}
        isPending={isLoadingRemoveAvatar}
      />
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="shrink-0">
          <div className="relative w-36 h-36 lg:w-48 lg:h-48">
            {avatarUrl && (
              <button
                onClick={() => setIsDeleteConfirmOpen(true)}
                className="hover:bg-red-600 hover:text-gray-200 transition-all duration-200 text-xl w-8 h-8 lg:text-2xl lg:w-12 lg:h-12 rounded-full text-red-600 bg-red-100 absolute top-0 right-0 flex justify-center items-center"
              >
                <MdDeleteOutline />
              </button>
            )}

            <img
              src={image ? image : avatarUrl ? avatarUrl : user_photo}
              alt="user-photo"
              className="w-full h-full rounded-full object-cover ring-4 ring-primary/10"
            />

            <label
              htmlFor="profile-image"
              className="
                  absolute bottom-1 right-1
                  flex items-center justify-center
                  w-11 h-11
                  rounded-full
                  bg-white shadow-md
                  border border-gray-200
                  cursor-pointer
                  hover:bg-primary
                  hover:text-white
                  transition-all duration-300
                  "
            >
              <IoFolderOpenOutline className="text-lg" />
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
            <div className="flex gap-2 items-center w-full mt-3">
              <button
                disabled={isLoadingUploadAvatar}
                onClick={handleSaveSetImage}
                className="flex-1 cursor-pointer flex items-center justify-center gap-1 py-2 text-sm font-semibold rounded-xl bg-green-50 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                <FiCheck />
                {isLoadingUploadAvatar ? "جاري الحفظ" : "حفظ"}
              </button>
              <button
                onClick={handleCanselSetImage}
                className="flex-1 cursor-pointer flex items-center justify-center gap-1 py-2 text-sm font-semibold rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                <FiX />
                الغاء
              </button>
            </div>
          )}
        </div>

        {/* Name & Phone & Gmail */}
        <div className="flex-1 w-full">
          {editInfo ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                className="py-2.5 px-4 text-sm rounded-2xl outline-none border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                placeholder="الاسم الاول"
                value={newInfoUser.firstName}
                onChange={(e) =>
                  setNewInfoUser({
                    ...newInfoUser,
                    firstName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="py-2.5 px-4 text-sm rounded-2xl outline-none border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                placeholder="الاسم الاخير"
                value={newInfoUser.lastName}
                onChange={(e) =>
                  setNewInfoUser({
                    ...newInfoUser,
                    lastName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="الرقم الاساسي"
                className="py-2.5 px-4 text-sm rounded-2xl outline-none border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                value={newInfoUser.phonePrimary}
                onChange={(e) =>
                  setNewInfoUser({
                    ...newInfoUser,
                    phonePrimary: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="الرقم البديل"
                className="py-2.5 px-4 text-sm rounded-2xl outline-none border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
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
              <input
                type="text"
                placeholder="العنوان"
                className="py-2.5 px-4 text-sm rounded-2xl outline-none border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all sm:col-span-2"
                value={newInfoUser.address ? newInfoUser.address : ""}
                onChange={(e) =>
                  setNewInfoUser({ ...newInfoUser, address: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="البريد الالكتروني"
                className="py-2.5 px-4 text-sm rounded-2xl outline-none border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all sm:col-span-2"
                value={newInfoUser.email}
                onChange={(e) =>
                  setNewInfoUser({ ...newInfoUser, email: e.target.value })
                }
              />

              <div className="flex gap-2 items-center w-full mt-1 sm:col-span-2">
                <button
                  onClick={handleEditInfoUser}
                  className="flex-1 cursor-pointer flex items-center justify-center gap-1 py-2.5 text-sm font-semibold rounded-2xl bg-green-50 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-200"
                >
                  <FiCheck />
                  {isLoadingUpdateDataUser ? "جاري التعديل" : "تعديل"}
                </button>
                <button
                  className="flex-1 cursor-pointer flex items-center justify-center gap-1 py-2.5 text-sm font-semibold rounded-2xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
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
                  <FiX />
                  الغاء
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  {`${firstName} ${lastName}`}
                </h2>
                <p className="text-gray-400 text-sm mt-1">{email}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                <div className="bg-gray-50 rounded-2xl px-4 py-3">
                  <h4 className="text-gray-400 text-xs mb-1">الرقم الاساسي</h4>
                  <p className="text-gray-800 font-medium">{phonePrimary}</p>
                </div>

                {phoneSecondary && (
                  <div className="bg-gray-50 rounded-2xl px-4 py-3">
                    <h4 className="text-gray-400 text-xs mb-1">الرقم البديل</h4>
                    <p className="text-gray-800 font-medium">
                      {phoneSecondary}
                    </p>
                  </div>
                )}

                {address && (
                  <div className="bg-gray-50 rounded-2xl px-4 py-3 sm:col-span-2">
                    <h4 className="text-gray-400 text-xs mb-1">العنوان</h4>
                    <p className="text-gray-800 font-medium">{address}</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setEditInfo(true)}
                className="self-start border border-primary text-primary py-2.5 px-5 text-sm font-semibold flex items-center gap-2 rounded-2xl hover:bg-primary hover:text-white transition-all duration-200"
              >
                <CiEdit className="text-lg" />
                <span>تعديل الملف الشخصي</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
