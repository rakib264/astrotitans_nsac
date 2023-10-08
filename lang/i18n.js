// i18n.js
"use client"

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { I18nextProvider } from "react-i18next";

i18n.use(HttpApi).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en', // Default fallback language
  debug: false, // Set to true for development/debugging purposes
  detection: {
    order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie'], // Cache the language in a cookie
    cookieMinutes: 60 * 24 * 365, // 1 year
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
  },

  // Add any other options or configurations as needed
});

export { I18nextProvider }

export default i18n;
