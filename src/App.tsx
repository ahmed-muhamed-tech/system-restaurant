import AppRoutes from "./router/AppRoutes";
import { useMe } from "./session/hookAuth";

export default function App() {
  useMe();
  return <AppRoutes />;
}
