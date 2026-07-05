import ProfileLoading from "./components/ProfileLoading";
import useProfileControls from "./hooks/useProfileControls";
import MyOrders from "./components/MyOrders";
import MoreOptions from "./components/MoreOptions";
import CountOrdersAndFavorites from "./components/CountOrdersAndFavorites";
import InfoUser from "./components/InfoUser";

export default function Profile() {
  const { isLoadingUserData } = useProfileControls();
  if (isLoadingUserData) return <ProfileLoading />;

  return (
    <div className="flex flex-col gap-6 px-4 lg:px-12 py-10 bg-gray-50 min-h-screen">
      {/* Photo & some info */}
      <InfoUser />

      {/* Counter orders and favorites */}
      <CountOrdersAndFavorites />

      {/* Orders */}
      <MyOrders />

      {/* More options */}
      <MoreOptions />
    </div>
  );
}
