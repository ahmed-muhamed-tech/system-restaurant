
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

export default function BodyDetailsLoading() {
  return (

        <div className="h-full flex flex-col gap-11 justify-between">
          <div>
            <h2 className="text-4xl mb-3 text-gray-700">asffdas</h2>
            <h3 className="text-primary mb-4 flex gap-2 items-center text-2xl">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
            </h3>

            <h3 className="mb-12 flex gap-2 items-center">
              <span className="text-2xl text-primary ">320ج.م</span>
              <span className="line-through text-muted text-xl">400ج.م</span>

              <span className="text-primary bg-primary/10 py-1 px-2 text-sm rounded-md">
                30%
              </span>
            </h3>
            <p className="text-lg leading-8 text-gray-800 "></p>

            <h3 className="text-muted mt-6 text-xl">الحجم</h3>

            <div className="flex gap-1 items-center mt-4">
              <button className="bg-gray-muted bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 py-1 w-18 text-center rounded-2xl text-sm">
                صغير
              </button>
              <button className="bg-gray-muted bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 py-1 w-18 text-center rounded-2xl text-sm">
                متوسط
              </button>
              <button className="bg-gray-muted bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 py-1 w-18 text-center rounded-2xl text-sm">
                كبير
              </button>
            </div>

            <h3 className="text-muted text-xl mt-8">الاضافات</h3>

            <div className="mt-2 flex flex-col gap-4">
              {[{name: "", price: 0, id: ""},{name: "", price: 0, id: ""},{name: "", price: 0, id: ""} ].map(
                (
                  {
                    name,
                    price,
                    id,
                  }: { name: string; price: number; id: string },
                  index: number,
                ) => (
                  <div className="flex justify-between text-lg relative pb-3">
                    <div className="bg-primary/30 h-1 w-full bottom-0 left-0 absolute"></div>
                    <div className="flex gap-2 items-center w-full">
                      <input
                        className="rounded-2xl bg-primary"
                        type="checkbox"
                        name={name}
                        id={id}
                     
                      />
                      <label htmlFor={id} className="flex-1 cursor-pointer">
                        {name}
                      </label>
                    </div>
                    <h4>{price}ج.م</h4>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="w-full flex gap-5 items-center  text-2xl">
            <div className="flex items-center gap-4 bg-gray-200 rounded-2xl">
              <button
              
                className="w-9 h-9 text-gray-900 bg-white rounded-full hover:bg-primary  hover:text-white transition-all duration-300"
              >
                +
              </button>
              <h4>10</h4>
              <button
           
                className="w-9 h-9 text-gray-900 bg-white rounded-full hover:bg-primary  hover:text-white transition-all duration-300"
              >
                -
              </button>
            </div>
            <button className="flex-1 bg-primary py-4 text-center text-white rounded-2xl">
              أضافه الي السله - 
            </button>
          </div>
        </div>

  );
}
