import "./header.css";
import { useDarkLightMode } from "@/hooks";
import clsx from "clsx";
import styled from "@emotion/styled";

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ light }) => (light ? "black" : "white")};
`;

export default function Header() {
  const [currentMode, { toggleMode }] = useDarkLightMode();

  return (
    <>
      <header className={clsx({ light: currentMode })}>
        <h1 className={clsx("logo", { light: currentMode })}>My React App</h1>
        <nav>
          <ol className="navList">
            <li className="navListItem">
              <NavLink href="/page1" light={currentMode}>
                Page 1
              </NavLink>
            </li>
            <li>
              <NavLink href="/page2" light={currentMode}>
                Page 2
              </NavLink>
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
