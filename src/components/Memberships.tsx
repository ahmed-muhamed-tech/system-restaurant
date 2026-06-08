import { LiaCrownSolid } from "react-icons/lia";
import v4 from "../assets/images/v4.png";
export default function Memberships() {
  return (
    <div className="mt-24">
      <div className="flex flex-col-reverse lg:flex-row text-center lg:text-start py-6 gap-6 w-fit justify-between items-center px-6 rounded-2xl bg-black">
        <LiaCrownSolid className="text-8xl -rotate-23 text-primary hidden lg:block" />
        <div>
          <h4 className="text-xl mb-4 text-white">
            كن عضوا الان{" "}
            <span className="block text-lg text-primary">
              احصل عروض ومزايا باكيدج بازوكا
            </span>
          </h4>

          <button className="py-3 px-6 rounded-md text-sm text-white bg-primary">
            انضم الان
          </button>
        </div>

        <img src={v4} alt="" className="h-33" />
      </div>
    </div>
  );
}
