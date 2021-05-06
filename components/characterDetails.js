import { createElement } from "../utils/elements";
import styles from "./characterDetails.module.css";

export function createCharacterDetails({
  image,
  name,
  gender,
  status,
  species,
  origin,
  location,
}) {
  return createElement("div", {
    className: styles.characterCard,
    children: [
      createElement("img", { src: image }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: gender }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: origin.name }),
      createElement("p", { innerText: location.name }),
    ],
  });
}
