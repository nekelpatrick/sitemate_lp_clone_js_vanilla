import "./styles/global.css";
import "./styles/buttons.css";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

document.querySelector("#app").insertAdjacentHTML(
  "beforeend",
  `
  ${Navbar()}
  ${Home()}
  `
);
