import { useState } from "react";
import { toast } from "react-toastify";
import useDeleteCartItemMutation from "../useDeleteCartItemMutation";
import useUpdateCartItemMutation from "../useUpdateCartItemMutation";
import { useQueryClient } from "@tanstack/react-query";
import { useCartStore } from "@/pages/user/cart/store/cart";
import type { CartControlsProps } from "../../models";

export default function useCartItemControls({
  quantity,
  id,
  totalPrice,
  title,
  unitPrice,
  note,
}: CartControlsProps) {
  const { dec } = useCartStore();
  const [count, setCount] = useState(quantity);
  const [itemTotal, setItemTotal] = useState(totalPrice);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const [message, setMessage] = useState(note);
  const [isEdit, setIsEdit] = useState(false);

  const { mutate, isPending: isDeleting } = useDeleteCartItemMutation(id);

  const { mutate: updateCart, isPending: isUpdatingQuantity } =
    useUpdateCartItemMutation(id);

  const queryClient = useQueryClient();
  function handleDeleteItem() {
    mutate(undefined, {
      onSuccess: () => {
        toast.success(`تم حذف ${title} بنجاح`);
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
        dec();
        setIsDeleteConfirmOpen(false);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  function syncQuantityWithServer(quantity: number) {
    updateCart(
      { quantity },
      {
        
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["cart"],
          });
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  }

  const handleEditNote = () => {
    setIsEdit(false);
    if (note === message || message.trim() === "") return;
    updateCart(
      { note: message.trim() },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["cart"],
          });
          toast.success("تم اضافه الملاحظه بنجاح");
        },
        onError: () => {
          toast.error("حدث خطأ برجاء المحاوله مره اخري");
        },
      },
    );
  };

  function increase() {
    const newQuantity = count + 1;
    setCount(newQuantity);
    setItemTotal(unitPrice * newQuantity);
    syncQuantityWithServer(newQuantity);
  }

  function decrease() {
    if (count == 1) return;
    const newQuantity = count - 1;
    setCount(newQuantity);
    setItemTotal(unitPrice * newQuantity);
    syncQuantityWithServer(newQuantity);
  }

  return {
    handleDeleteItem,
    decrease,
    increase,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    count,
    itemTotal,
    isDeleting,
    isUpdatingQuantity,
    setMessage,
    isEdit,
    message,
    setIsEdit,
    handleEditNote,
  };
}
