import i18next from "i18next";
// import { showTranslations } from "translation-check";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "virtual:i18next-loader";

console.log("resources", resources);

i18next
  .use(LanguageDetector)
  .init({
    resources,
    debug: import.meta.env.DEV,
    ns: ["common", "auth"],
    lng: "vi",
  })
  .then(() => {
    // showTranslations(i18next);
  });

export default i18next;
