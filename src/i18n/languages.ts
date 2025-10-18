import { weatherCodeMap } from "./weather/weatherCodeMap";

export const languages = {
  en: "English",
  es: "Spanish",
};
export const defaultLang = "es";

export interface Ui {
  [lang: string]: {
    [key: string]: string;
  };
}
const weatherEn: Record<string, string> = {};
const weatherEs: Record<string, string> = {};

const translationPairs: Record<string, { en: string; es: string }> = {
  sunny: { en: "Sunny", es: "Soleado" },
  partly_cloudy: {
    en: "Cloudy",
    es: "Nublado",
  },
  cloudy: { en: "Cloudy", es: "Nublado" },
  overcast: { en: "Overcast", es: "Nublado" },
  mist: { en: "Mist", es: "Niebla" },
  patchy_rain_possible: {
    en: "Rainy",
    es: "Llueve",
  },
  patchy_snow_possible: { en: "Patchy snow possible", es: "Posibles nevadas" },
  thundery_outbreaks_possible: {
    en: "Rainy",
    es: "Llueve",
  },
};

for (const [_, key] of Object.entries(weatherCodeMap)) {
  const tr = translationPairs[key];
  weatherEn[`weather.${key}`] = tr ? tr.en : key;
  weatherEs[`weather.${key}`] = tr ? tr.es : key;
}

export const ui: Ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "home.title": "Welcome to SAZZA WEB OS",
    "home.description": "Please choose an option",
    ...weatherEn,
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    "home.title": "Bienvenido a SAZZA WEB OS",
    "home.description": "Por favor elija una opción",
    ...weatherEs,
  },
} as const;
