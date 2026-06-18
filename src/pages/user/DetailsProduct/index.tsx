import { useParams } from "react-router-dom";
import { useFetchCurrentProduct } from "@/pages/user/DetailsProduct/hooks/useCurrentProductQuery";
import BodyDetailsLoading from "./components/BodyDetailsLoading";
import BodyDetails from "./components/BodyDetails";
import ImageDetails from "./components/imageDetails";
import ImageDetailsLoading from "./components/ImageDetailsLoading";
import Error from "@/components/ui/Error";

export default function DetailsProduct() {
  const { productId } = useParams<{ productId: string }>();
  
  const {
    data: currentProduct,
    isPending,
    isError,
  } = useFetchCurrentProduct(productId);

  if (isPending) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 h-screen">
        <div className="h-[60%] w-full lg:h-full lg:w-1/2 rounded-2xl shadow-card">
          <ImageDetailsLoading />
        </div>

        <div className="flex-1 bg-white rounded-2xl py-8 px-6">
          <BodyDetailsLoading />
        </div>
      </div>
    );
  }

  if (isError || !currentProduct) {
    return <Error />;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:overflow-hidden h-screen">
      <div className="h-[60%] w-full lg:h-full lg:w-1/2 rounded-2xl shadow-card">
        <ImageDetails currentProduct={currentProduct} />
      </div>

      <div className="flex-1 bg-white rounded-2xl py-8 px-6 lg:overflow-y-auto pb-33 lg:pb-8">
        <BodyDetails currentProduct={currentProduct} />
      </div>
    </div>
  );
}
