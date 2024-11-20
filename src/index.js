import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import langEs from "./lang/es.json";
import langEn from "./lang/en.json";
import langMx from "./lang/mx.json";
import langCo from "./lang/co.json";
import { HelmetProvider } from "react-helmet-async";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: langEn,
    },
    es: {
      translation: langEs,
    },
    mx: {
      translation: langMx,
    },
    co: {
      translation: langCo,
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
