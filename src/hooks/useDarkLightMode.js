import { useToggle } from "react-use";

export default function useDarkLightMode() {
  const [currentMode, toggleMode] = useToggle(true);
  return [currentMode, { toggleMode }];
}
