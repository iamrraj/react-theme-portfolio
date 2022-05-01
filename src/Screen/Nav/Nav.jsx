import React from "react";
import Toggle from "../../Theme";
import { t } from "i18next";
import i18n from "../../i18n";
function Nav() {
  const [openLang, setOpenLanguage] = React.useState(false);
  const toggleFlag = () => setOpenLanguage(!openLang);
  const menu = [
    t("Nav.Home"),
    t("Nav.About"),
    t("Nav.Services"),
    t("Nav.Contact"),
    t("Nav.Pricing"),
  ];

  const getCurrentLng = () =>
    i18n.language || window.localStorage.i18nextLng || "";

  const changeLan = (lng) => {
    i18n.changeLanguage(lng);
    window.location.reload(1);
  };

  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 bg-gray-800 dark:bg-white"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="toggleColour dark:text-black text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="# "
          >
            {t("Nav.PORTFOLIO")}
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden  mt-2 lg:mt-0  lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {menu.map((item, index) => (
              <li
                className="mr-3 hover:bg-mainColor hover:rounded-md  p-1"
                key={index + 1}
              >
                <a
                  className="inline-block py-2 px-4 dark:text-black text-white  font-bold no-underline"
                  href="# "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <Toggle />

          <button
            className="ml-2 relative top-1  border-gray-400"
            onClick={() => toggleFlag()}
          >
            <span className="font-bold">
              {getCurrentLng() === "pl" ? (
                <button onClick={() => changeLan("en")}>
                  <img
                    src={
                      "https://www.nationsonline.org/flags_big/Poland_lgflag.gif"
                    }
                    alt="pl"
                    longdesc="https://fimeal.com/privacy-policy"
                    style={{ width: "23px", height: "20px" }}
                  />
                </button>
              ) : (
                <button onClick={() => changeLan("pl")}>
                  <img
                    src={
                      "https://miro.medium.com/max/1200/0*o0-6o1W1DKmI5LbX.png"
                    }
                    alt="pl"
                    longdesc="https://fimeal.com/privacy-policy"
                    style={{ width: "23px", height: "20px" }}
                  />
                </button>
              )}
            </span>
          </button>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Nav;
