import { useState, type Dispatch, type SetStateAction } from "react";
import type { ProductForm } from "../../types";

type PreviewImages = {
  firstPhoto: string;
  secondPhoto: string;
  therdPhoto: string;
  fourthPhoto: string;
  fifthPhoto: string;
};

export default function PhotosProducts({
  setFormData,
  formData,
}: {
  setFormData: Dispatch<SetStateAction<ProductForm>>;
  formData: ProductForm;
}) {
  const [preview, setPreview] = useState<PreviewImages>({
    firstPhoto: "",
    secondPhoto: "",
    therdPhoto: "",
    fourthPhoto: "",
    fifthPhoto: "",
  });

  const handleOnChangePhotos = (e: any) => {
    const { name, files } = e.target;
    const image = files[0];
    setFormData({ ...formData, images: [...formData.images, image] });
    const previewImage = URL.createObjectURL(image);
    setPreview({ ...preview, [name]: previewImage });
  };

  return (
    <div className="border-t border-gray-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h4 className="text-lg mb-2">الصوره الرئيسيه</h4>
        <div className="h-44 relative cursor-pointer bg-primary/10 border overflow-hidden border-primary rounded-2xl">
          <input
            type="file"
            name="firstPhoto"
            onChange={(e: any) => handleOnChangePhotos(e)}
            accept="image/*"
            className="opacity-0 bg-accent h-full w-full  cursor-pointer absolute z-50"
          />

          {preview.firstPhoto && (
            <img src={preview.firstPhoto} alt="" className="w-full h-full" />
          )}
        </div>
      </div>

      <div>
        <h4 className="text-lg mb-2">
          صور اضافيه <span className="text-sm">اختياري</span>
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-22 bg-primary/10 border border-primary rounded-2xl relative overflow-hidden">
            <input
              type="file"
              accept="image/*"
              className="opacity-0 bg-accent h-full w-full  cursor-pointer absolute inset-0"
              name="secondPhoto"
              onChange={(e: any) => handleOnChangePhotos(e)}
            />
            {preview.secondPhoto && (
              <img src={preview.secondPhoto} alt="" className="w-full h-full" />
            )}
          </div>
          <div className="h-22 bg-primary/10 border border-primary rounded-2xl relative overflow-hidden">
            <input
              type="file"
              accept="image/*"
              className="opacity-0 bg-accent h-full w-full  cursor-pointer absolute inset-0"
              name="therdPhoto"
              onChange={(e: any) => handleOnChangePhotos(e)}
            />
            {preview.therdPhoto && (
              <img src={preview.therdPhoto} alt="" className="w-full h-full" />
            )}
          </div>
          <div className="h-22 bg-primary/10 border border-primary rounded-2xl relative overflow-hidden">
            <input
              type="file"
              accept="image/*"
              className="opacity-0 bg-accent h-full w-full  cursor-pointer absolute inset-0"
              name="fourthPhoto"
              onChange={(e: any) => handleOnChangePhotos(e)}
            />
            {preview.fourthPhoto && (
              <img src={preview.fourthPhoto} alt="" className="w-full h-full" />
            )}
          </div>

          <div className="h-22 bg-primary/10 border border-primary rounded-2xl relative overflow-hidden">
            <input
              type="file"
              accept="image/*"
              className="opacity-0 bg-accent h-full w-full  cursor-pointer absolute inset-0"
              name="fifthPhoto"
              onChange={(e: any) => handleOnChangePhotos(e)}
            />
            {preview.fifthPhoto && (
              <img src={preview.fifthPhoto} alt="" className="w-full h-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
