import "./header.css";
import { useDarkLightMode } from "@/hooks";

export default function Header() {
  const [currentMode, { toggleMode }] = useDarkLightMode();

  return (
    <>
      <header>
        <h1 className="logo">My React App</h1>
        <nav>
          <ol className="navList">
            <li className="navListItem">
              <a href="/page1" className="navLink">
                Page 1
              </a>
            </li>
            <li>
              <a href="/page2" className="navLink">
                Page 2
              </a>
            </li>
          </ol>
        </nav>
        <button onClick={toggleMode}>Mode {currentMode}</button>
      </header>
    </>
  );
}
