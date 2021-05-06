import "./style.css";
import styles from "./details.module.css";
import { createElement } from "./utils/elements";
import { getCharacter } from "./utils/api";
import { createCharacterDetails } from "./components/characterDetails";

const params = new URLSearchParams(location.search);
const characterId = params.get("id");

getCharacter(characterId).then((response) => {
  const characterDetailsElement = createCharacterDetails(response);
  mainElement.append(characterDetailsElement);
});

const mainElement = createElement("main", {
  className: styles.main,
});

document.querySelector("#app").append(mainElement);
