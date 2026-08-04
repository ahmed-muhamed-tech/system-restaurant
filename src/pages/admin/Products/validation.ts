type handleCheckInputsBeforeRequistToServerProps = {
  name: string;
  description: string;
  category: string;
  hasDiscount: boolean;
  discountPercentage: number;
  images: any;
  label: string;
  price: number;
  slug: string;
};

export const handleCheckInputsBeforeRequistToServer = ({
  name,
  description,
  category,
  hasDiscount,
  discountPercentage,
  images,
  label,
  price,
  slug,
}: handleCheckInputsBeforeRequistToServerProps) => {
  if (!name.trim()) return "يجيب اضافه اسم للوجبه";
  else if (!description.trim()) return "يجيب اضافه وصف للوجبه";
  else if (!category.trim()) return "يجيب اضافه تصنيف للوجبه";
  else if (hasDiscount && discountPercentage <= 0)
    return "يجيب اضافه نسبه خصم للوجبه";
  else if (images.length === 0) return "يجيب اضافه صوره علي الاقل للوجبه";
  else if (!label.trim() || price <= 0 || !slug.trim()) {
    return "تاكد من اضافه حجم علي الاقل  واكمال كل بياناته";
  }
};
