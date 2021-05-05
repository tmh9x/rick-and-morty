import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { createCharacterElement } from "./components/character";
import { getCharacters } from "./utils/api";
import { debounce } from "./utils/timer";

getCharacters().then((characters) => {
  const characterElements = characters.map(createCharacterElement);
  characterSection.append(...characterElements);
});

const characterSection = createElement("section", {
  className: "results",
  // children: characters.map(createCharacterElement),
});

const mainElement = createElement("main", {
  children: [
    createElement("header", {
      className: "hero",
      children: [
        createElement("h1", {
          className: "hero__title",
          innerText: "Rick and Morty",
        }),
        createElement("input", {
          className: "input",
          placeholder: "Search character",
          autofocus: true,
          oninput: debounce((event) => {
            removeAllChildren(characterSection);

            const search = event.target.value;
            getCharacters(search).then((characters) => {
              const characterElements = characters.map(createCharacterElement);
              characterSection.append(...characterElements);
            });
          }, 300),
        }),
      ],
    }),
    characterSection,
    createElement("footer", {
      className: "footer",
      children: [
        createElement("small", {
          className: "footer__trademark",
          children: [
            createElement("span", { innerText: "Made with " }),
            createElement("span", { className: "primary", innerText: "♥" }),
          ],
        }),
      ],
    }),
  ],
});

document.querySelector("#app").append(mainElement);
