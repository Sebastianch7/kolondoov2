import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function ItemMenuDesktop({ data }) {
  const [lang, setLang] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location]);

  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light no-link">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="no-link navbar-nav">
          <li className="nav-item">
            {data.titleUrl && !data.titleUrl.includes("herramientas") ? (
              <a className="nav-link no-link" href={`/${lang}${data.titleUrl}`}>
                {data.title}
              </a>
            ) : (
              <button className="nav-link no-link" onClick={() => {}}>
                {data.title}
              </button>
            )}
            <div className="submenu">
              {data.children.map((item, key) => (
                <a
                  key={key}
                  className="dropdown-item"
                  href={`/${lang}${item.url}`}
                >
                  {t(item.name)}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ItemMenuDesktop;
