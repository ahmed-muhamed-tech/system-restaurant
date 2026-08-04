import { useState } from "react";
import type { ProductForm } from "../../types";
import addNewMenuMutation from "../addNewMenuMutation";
import { toast } from "react-toastify";
import { handleCheckInputsBeforeRequistToServer } from "../../validation";

export default function controlPopupAddProduct(onClose: () => void) {
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    description: "",
    category: "",
    isActive: true,
    hasDiscount: true,
    discountPercentage: 0,
    images: [],
  });

  const [sizes, setSizes] = useState([
    {
      label: "",
      slug: "",
      price: 0,
    },
  ]);

  const [addons, setAddons] = useState([
    {
      name: "",
      price: 0,
    },
  ]);

  const { mutate: addNewMenu, isPending: isLoadingAddNewMenu } =
    addNewMenuMutation();

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddNewProduct = () => {
    const {
      name,
      description,
      category,
      hasDiscount,
      isActive,
      discountPercentage,
      images,
    } = formData;

    const { label, price, slug } = sizes[0];

    const validation = handleCheckInputsBeforeRequistToServer({
      name,
      description,
      category,
      hasDiscount,
      discountPercentage,
      images,
      label,
      price,
      slug,
    });
    if (validation) {
      toast.error(validation);
      return;
    }

    let form = new FormData();

    form.append("name", name);
    form.append("description", description);
    form.append("categoryId", category);
    form.append("isAvailable", String(isActive));
    form.append("hasDiscount", String(hasDiscount));
    form.append("discountPercentage", String(discountPercentage));

    images.forEach((img) => form.append("images", img));

    form.append("sizes", JSON.stringify(sizes));
    form.append("addons", JSON.stringify(addons));

    

    addNewMenu(form, {
      onSuccess: () => {
        toast.success("تم اضافه المنتج");
        onClose();
      },
      onError: (error: any) => {
        toast.error("حدث خطأ ما");
        console.log(error.response?.data);
      },
    });
  };

  return {
    formData,
    handleAddNewProduct,
    handleOnChange,
    setFormData,
    setAddons,
    setSizes,
    addons,
    sizes,
    isLoadingAddNewMenu,
  };
}
