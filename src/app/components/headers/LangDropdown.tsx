import { useState, useRef, useEffect } from "react";
import i18nCore from "../../../i18";
import "../../../css/lang.css";

type AppI18n = {
  language: string;
  changeLanguage: (lng: string) => Promise<unknown>;
  on: (ev: string, fn: (lng: string) => void) => void;
  off: (ev: string, fn: (lng: string) => void) => void;
};

const i18n = i18nCore as unknown as AppI18n;

type Lang = "uz" | "kr" | "en" | "ru";

const LANGS: Lang[] = ["uz", "kr", "en", "ru"];

const languages: Record<Lang, { label: string; flag: string }> = {
  uz: { label: "O‘zbek", flag: "/icons/flag/uzbek.png" },
  kr: { label: "한국어", flag: "/icons/flag/korea.png" },
  en: { label: "English", flag: "/icons/flag/english.png" },
  ru: { label: "Русский", flag: "/icons/flag/russia.png" },
};

function normalizeToLang(code: string | undefined): Lang {
  if (!code) return "uz";
  const base = code.split("-")[0].toLowerCase();
  if (LANGS.includes(base as Lang)) return base as Lang;
  return "uz";
}

function readStoredLang(): Lang {
  const stored = localStorage.getItem("lang");
  if (stored && LANGS.includes(stored as Lang)) return stored as Lang;
  return normalizeToLang(i18n.language);
}

export default function LangDropdown() {
  const [selected, setSelected] = useState<Lang>(() => readStoredLang());
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onLangChanged = (lng: string) => {
      setSelected(normalizeToLang(lng));
    };
    const lang = readStoredLang();
    setSelected(lang);
    const cur = normalizeToLang(i18n.language);
    if (cur !== lang) {
      void i18n.changeLanguage(lang);
    }
    i18n.on("languageChanged", onLangChanged);
    return () => {
      i18n.off("languageChanged", onLangChanged);
    };
  }, []);

  const handleSelect = (lang: Lang) => {
    setSelected(lang);
    localStorage.setItem("lang", lang);
    void i18n.changeLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="lang-dropdown" ref={ref}>
      <div className="selected" onClick={() => setOpen(!open)}>
        <img
          src={process.env.PUBLIC_URL + languages[selected].flag}
          alt={selected}
          className="flag"
        />
        <span>{languages[selected].label}</span>
        <span className={`arrow ${open ? "open" : ""}`}>▾</span>
      </div>

      {open && (
        <div className="dropdown">
          {Object.entries(languages).map(([key, value]) => (
            <div
              key={key}
              className={`item ${selected === key ? "active" : ""}`}
              onClick={() => handleSelect(key as Lang)}
            >
              <img
                src={process.env.PUBLIC_URL + value.flag}
                alt={key}
                className="flag"
              />
              <span>{value.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
