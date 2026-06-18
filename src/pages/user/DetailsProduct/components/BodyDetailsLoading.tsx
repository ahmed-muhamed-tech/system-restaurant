import { IoIosStar } from "react-icons/io";

export default function BodyDetailsLoading() {
  return (
    <div className="h-full flex flex-col animate-pulse gap-11 justify-between">
      <div>
        <h2 className="mb-3 rounded-md bg-gray-200 w-24 h-8"></h2>
        <h3 className="text-gray-200 mb-4 flex gap-2 items-center text-2xl">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </h3>

        <h3 className="mb-12 flex gap-2 items-center">
          <span className="bg-gray-200 h-4 w-22"></span>
          <span className="bg-gray-200 h-4 w-22"></span>

          <span className="rounded-md bg-gray-200 h-4 w-22"></span>
        </h3>
        <p className="text-lg leading-8 text-gray-800 "></p>

        <h3 className="bg-gray-200 h-12 w-24 rounded-2xl mt-6"></h3>

        <div className="flex gap-1 items-center mt-4">
          <button className="bg-gray-200 h-8  w-32 rounded-2xl"></button>
          <button className="bg-gray-200 h-8  w-32 rounded-2xl"></button>
          <button className="bg-gray-200 h-8  w-32 rounded-2xl"></button>
        </div>

        <h3 className="text-muted text-xl mt-8 h-8 w-32 bg-gray-200 rounded-2xl"></h3>

        <div className="mt-2 flex flex-col gap-4">
          <div className="flex justify-between text-lg relative pb-3">
            <div className="bg-gray-200 h-1 w-full bottom-0 left-0 absolute"></div>
            <div className="flex gap-2 items-center w-full">
              <input className="rounded-2xl bg-primary" type="checkbox" />
              <label className="flex-1 h-4 bg-gray-200 w-12 cursor-pointer"></label>
            </div>
            <h4 className="h-4 w-8 rounded-2xl bg-gray-200"></h4>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-5 items-center  text-2xl">
        <div className="flex items-center gap-4 bg-gray-200 rounded-2xl">
          <button className="w-9 h-9  bg-white rounded-full"></button>
          <h4 className="h-4 w-4 bg-gray-300"></h4>
          <button className="w-9 h-9  bg-white rounded-full"></button>
        </div>
        <button className="flex-1 h-12 bg-primary rounded-2xl"></button>
      </div>
    </div>
  );
}
