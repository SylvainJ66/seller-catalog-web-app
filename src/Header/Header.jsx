import "./header.css";
import { useDarkLightMode } from "@/hooks";
import clsx from "clsx";

export default function Header() {
  const [currentMode, { toggleMode }] = useDarkLightMode();

  return (
    <>
      <header className={clsx({ light: currentMode })}>
        <h1 className={clsx("logo", { light: currentMode })}>My React App</h1>
        <nav>
          <ol className="navList">
            <li className="navListItem">
              <a
                href="/page1"
                className={clsx("navLink", { light: currentMode })}
              >
                Page 1
              </a>
            </li>
            <li>
              <a
                href="/page2"
                className={clsx("navLink", { light: currentMode })}
              >
                Page 2
              </a>
            </li>
          </ol>
        </nav>
        <button onClick={toggleMode}>
          Mode {currentMode ? "Dark" : "Light"}
        </button>
      </header>
    </>
  );
}
