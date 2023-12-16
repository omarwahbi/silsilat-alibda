import React from "react";
import i18next from "i18next";
import GlobeIcon from "./GlobeIcon";
import cookies from "js-cookie";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const LangSelector = () => {
  const { t } = useTranslation();
  const languages = [
    {
      name: "English",
      code: "en",
      country_code: "gb",
    },
    {
      name: "العربية",
      code: "ar",
      country_code: "iq",
      dir: "rtl",
    },
  ];

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("company_name");
  }, [currentLanguage]);
  return (
    <div className="dropdown language-selector">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <GlobeIcon />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {languages.map(({ name, code, country_code }) => (
          <li key={code}>
            <button
              className="dropdown-item"
              onClick={() => i18next.changeLanguage(code)}
              disabled={code === currentLanguageCode}
            >
              <span
                className={`fi fi-${country_code} mx-2`}
                style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
              ></span>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangSelector;
