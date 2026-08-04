import NameProduct from "../inputs/NameProduct";
import Category from "../inputs/Category";
import Description from "../inputs/description";
import StatusActive from "../inputs/StatusActive";
import HasDiscount from "../inputs/HasDiscount";
import DiscountPercentage from "../inputs/DiscountPercentage";
import PhotosProducts from "../inputs/PhotosProducts";
import AddNewAddons from "../inputs/AddNewAddons";
import AddNewSizes from "../inputs/AddNewSizes";
import SaveOrCancel from "../inputs/SaveOrCancel";
import controlPopupAddProduct from "../../hooks/controlPopupAddProduct";

type MainInfoProductProps = {
  onClose: () => void;
};

export default function MainInfoProduct({ onClose }: MainInfoProductProps) {
  const {
    formData,
    handleAddNewProduct,
    handleOnChange,
    setFormData,
    setAddons,
    setSizes,
    addons,
    sizes,
    isLoadingAddNewMenu,
  } = controlPopupAddProduct(onClose);

  return (
    <div className="py-2 px-4">
      {/* Section 1: المعلومات الأساسية */}
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-4 text-right">
          المعلومات الأساسية
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Right Column Inputs */}
          <div className="space-y-4">
            {/* Product Name */}
            <NameProduct name={formData.name} handleOnChange={handleOnChange} />

            {/* Category */}
            <Category
              category={formData.category}
              handleOnChange={handleOnChange}
            />

            {/* Price */}
            <div>
              <HasDiscount
                hasDiscount={formData.hasDiscount}
                setFormData={setFormData}
              />

              {formData.hasDiscount && (
                <DiscountPercentage
                  handleOnChange={handleOnChange}
                  discountPercentage={formData.discountPercentage}
                />
              )}
            </div>
          </div>

          {/* Left Column Inputs */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Description */}
            <Description
              description={formData.description}
              handleOnChange={handleOnChange}
            />

            {/* Status Toggle */}
            <StatusActive
              isActive={formData.isActive}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>

      {/* Section 2: صور المنتج */}
      <PhotosProducts formData={formData} setFormData={setFormData} />

      {/* Addons and Sizes */}
      <div className="mt-6">
        <h3>خيارات اخري</h3>

        <div className="mt-4 flex gap-2 flex-col lg:flex-row">
          <AddNewAddons addons={addons} setAddons={setAddons} />
          <AddNewSizes sizes={sizes} setSizes={setSizes} />
        </div>
      </div>

      {/* Footer Buttons */}
      <SaveOrCancel
        isLoadingAddNewMenu={isLoadingAddNewMenu}
        onClose={onClose}
        handleAddNewProduct={handleAddNewProduct}
      />
    </div>
  );
}
