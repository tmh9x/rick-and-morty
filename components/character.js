import "./character.css";
import { createElement } from "../utils/elements";

export function createCharacterElement({
  image,
  name,
  status,
  species,
  origin,
}) {
  return createElement("div", {
    className: "characterCard",
    children: [
      createElement("img", { src: image }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: origin.name }),
    ],
  });
}
