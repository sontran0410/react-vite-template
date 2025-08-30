import i18next from "i18next";
import { showTranslations } from "translation-check";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "virtual:i18next-loader";

i18next
  .use(LanguageDetector)
  .init({
    resources,
  })
  .then(() => {
    showTranslations(i18next);
  });

export default i18next;
