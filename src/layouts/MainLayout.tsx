import useStore from "@/session/storeAuth";

export default function MainLayout() {
  const { userInfo } = useStore();

  return (
    <div className="h-screen flex justify-center items-center text-6xl bg-card text-accent font-black">
      <h1 className="py-2 px-4 bg-primary/20 rounded-xl">
        Welcome : {userInfo && userInfo.firstName}
      </h1>
    </div>
  );
}
