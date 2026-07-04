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

  const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);

  // when server return error rerender component and return true value
  useEffect(() => {
    setOptimisticQuantity(quantity);
  }, [quantity]);

  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const [noteText, setNoteText] = useState(note);
  const [isEditingNote, setIsEditingNote] = useState(false);

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

  const pendingClicks = useRef(0);

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

  const handleSaveNote = () => {
    setIsEditingNote(false);
    if (note === noteText || noteText.trim() === "") return;
    updateCart(
      { note: noteText.trim(), id },
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

    const next = optimisticQuantity + 1; // ← من localQuantity مش quantity
    setOptimisticQuantity(next);

    syncQuantityWithServer(next);
  }

  function decrease() {
    if (optimisticQuantity <= 1) return;

    if (pendingClicks.current >= MAX_CLICKED) {
      toast.warning("انتظر قليلا...");
      return;
    }

    pendingClicks.current++;

    const next = optimisticQuantity - 1;
    setOptimisticQuantity(next);
    syncQuantityWithServer(next);
  }

  const handleClearNote = () => {
    updateCart(
      {
        id,
        note: null,
      },
      {
        onSuccess: () => {
          setNoteText("");
          queryClient.invalidateQueries({
            queryKey: ["cart"],
          });
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
    setNoteText,
    isEditingNote,
    noteText,
    setIsEditingNote,
    optimisticQuantity,
    handleSaveNote,
    handleClearNote,
  };
}
