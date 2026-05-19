import Routes from "./core/Routes";
import { useMe } from "./features/auth/hookAuth";

export default function App() {
  useMe();

  return <Routes />;
}
