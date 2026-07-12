import ruFlag from "../assets/flags/ru.svg";
import svFlag from "../assets/flags/sv.svg";
import enFlag from "../assets/flags/en.svg";

// Full list, includes languages reachable only by direct URL (e.g. /ru)
export const languages = {
  ru: {
    label: "Русский",
    flag: ruFlag,
  },
  sv: {
    label: "Svenska",
    flag: svFlag,
  },
  en: {
    label: "English",
    flag: enFlag,
  },
};

// Shown in the language switcher dropdown
export const selectableLanguages = {
  sv: languages.sv,
  en: languages.en,
};
