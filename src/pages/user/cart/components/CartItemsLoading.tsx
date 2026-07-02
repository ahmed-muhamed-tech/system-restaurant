export default function CartItemsLoading() {
  return (
    <div className="lg:w-2/3 py-8 px-4 lg:overflow-y-auto mb-22 lg:mb-0">
      {/* Head */}
      <div className="flex gap-1 text-xl font-semibold items-center">
        <h2 className="text-gray-700 text-2xl lg:text-3xl">سله الطلبات</h2>
        <div className="bg-gray-200 w-8 h-8 rounded-full "></div>
      </div>

      {/* Products */}
      <div className="mt-8 flex flex-col gap-5 ">

      {Array.from({ length: 10 }).map((_, index: number) => (
        <div key={index / 2} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all">
          {/* Top */}
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-gray-200 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0"></div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800"></h3>

                <div className="mt-2 flex flex-col flex-wrap gap-2">
                  <span className="bg-gray-200  w-32 h-2 rounded-full"></span>
                  <span className="bg-gray-200  w-32 h-2 rounded-full"></span>
                  <span className="bg-gray-200  w-32 h-2 rounded-full"></span>
                  <span className="bg-gray-200  w-32 h-2 rounded-full"></span>
                  <span className="bg-gray-200  w-32 h-2 rounded-full"></span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="bg-gray-200 h-2 w-33"></span>

                <span className="bg-gray-200 h-2 w-9"></span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 border-t border-gray-100"></div>

          {/* Bottom */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h4 className="bg-gray-200 h-3 w-12 mb-4"></h4>

              <p className="bg-gray-200 h-2 w-22"></p>
            </div>

            <div className="flex gap-2 items-center md:gap-5 bg-gray-100 rounded-full px-2 py-1 lg:px-3 lg:py-2">
              <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white "></button>

              <span className=" w-6 h-6 rounded-full bg-gray-200 "></span>

              <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white "></button>
            </div>

            <button
              className="
              w-12 h-12
              rounded-2xl
             bg-gray-200
           
              text-2xl
              flex justify-center items-center
            
              transition-all
            "
            ></button>
          </div>

          <div className="mt-5">
            <textarea
              rows={4}
              className="
        w-full
        px-4 py-3
        text-sm lg:text-lg
       
        rounded-2xl
        border border-gray-200
        bg-gray-200
        resize-none
        outline-none
        
      
      "
            />
            <div className="flex mt-3 items-center gap-2">
              <button className="rounded-md bg-gray-200 w-22 h-12 flex-1"></button>

              <button className="rounded-md bg-gray-200 w-22 h-12 flex-1"></button>
            </div>
          </div>
        </div>
      ))}

      </div>
    </div>
  );
}
