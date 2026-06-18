import AppRoutes from "./router/AppRoutes";
import { useMe } from "@/session/hooks/useSession";

export default function App() {
  useMe();
  return <AppRoutes />;
}
