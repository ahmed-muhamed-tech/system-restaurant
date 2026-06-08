import { useFetchCategories } from "../features/user/hookUser";
import ButtonCategoryLoading from "./ButtomCategoryLoading";
import ButtonCategory from "./ButtonCategory";
type Category = {
  setCategory: any;
  category: string;
};
export default function Categories({ setCategory, category }: Category) {
  const { data, isPending, isError } = useFetchCategories();

  if (isError) {
    return (
      <div className="h-120 mt-8 bg-white text-2xl text-primary flex justify-center items-center">
        <h3 className="bg-primary/20 py-4 px-6 rounded-2xl">
          {" "}
          حدث خطأ غير متوقع{" "}
        </h3>
      </div>
    );
  }

  return (
    <div className="mt-8 lg:mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-4">
      {isPending &&
        Array.from({ length: 10 }).map((_, index) => <ButtonCategoryLoading key={index} />)}

      {data &&
        !isPending &&
        [{ slug: "all", name: "الكل" }, ...data]?.map(
          ({ slug, name }: { slug: string; name: string }, index: number) => (
            <div onClick={() => setCategory(slug)} key={index}>
              <ButtonCategory
                isActive={category === slug}
                label={name}
                key={index}
              />
            </div>
          ),
        )}
    </div>
  );
}
