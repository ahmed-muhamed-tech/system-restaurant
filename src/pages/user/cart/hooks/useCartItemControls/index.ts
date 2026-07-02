import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import useDeleteCartItemMutation from "../useDeleteCartItemMutation";
import useUpdateCartItemMutation from "../useUpdateCartItemMutation";
import { useQueryClient } from "@tanstack/react-query";
import { useCartStore } from "@/pages/user/cart/store/cart";
import type { CartControlsProps } from "../../models";

export default function useCartItemControls({
  quantity,
  id,
  title,
  note,
}: CartControlsProps) {
  const { dec } = useCartStore();

  const [localQuantity, setLocalQuantity] = useState(quantity);


  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);

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

  const MAX_CLICKED = 5;

  let pendingClicks = useRef(0);

  function syncQuantityWithServer(quantity: number) {
    updateCart(
      { quantity, id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["cart"],
          });
        },
        onError: (error) => {
          console.log(error);
        },
        onSettled: () => {
          pendingClicks.current = 0;
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
    if (pendingClicks.current >= MAX_CLICKED) {
      toast.warning("انتظر قليلا...");
      return;
    }

    pendingClicks.current++;

    const next = localQuantity + 1; // ← من localQuantity مش quantity
    setLocalQuantity(next);

    syncQuantityWithServer(next);
  }

  function decrease() {
    if (quantity == 1) return;

    if (pendingClicks.current >= MAX_CLICKED) {
      toast.warning("انتظر قليلا...");
      return;
    }

    pendingClicks.current++;

    const next = localQuantity - 1;
    setLocalQuantity(next);
    syncQuantityWithServer(next);
  }

  const handleDeleteNote = () => {
    updateCart(
      {
        note: null,
      },
      {
        onSuccess: () => {
          setMessage("")
          toast.success("تم حذف الملاحظه بنجاح");
        },
        onError: (error) => {
          console.log(error);
          toast.error("حدث خطأ ما");
        },
      },
    );
  };

  return {
    handleDeleteItem,
    decrease,
    increase,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    isDeleting,
    isUpdatingQuantity,
    setMessage,
    isEdit,
    message,
    setIsEdit,
    localQuantity,
    handleEditNote,
    handleDeleteNote,
  };
}
