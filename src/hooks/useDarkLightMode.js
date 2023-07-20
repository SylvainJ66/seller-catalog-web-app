import { useToggle } from "react-use";

export default function useDarkLightMode() {
  const [currentMode, toggleMode] = useToggle(true);
  const currentModeText = currentMode ? "Light" : "Dark";
  return [currentModeText, { toggleMode }];
}
