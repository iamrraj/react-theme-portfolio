import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { t } from "i18next";
function Footer() {
  const socialMedia = [
    {
      name: "Instagram",
      icon: <BsInstagram />,
    },
    {
      name: "Facebook",
      icon: <BsFacebook />,
    },
    {
      name: "Twitter",
      icon: <BsTwitter />,
    },
    {
      name: "Github",
      icon: <BsGithub />,
    },
  ];

  const BottomSection = [
    {
      title: t("Footer.Company"),
      links: [
        {
          name: t("Footer.About"),
          path: "/about",
        },
        {
          name: t("Footer.Meet the team"),
          path: "/team",
        },

        {
          name: t("Footer.Careers"),
          path: "/careers",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: t("Footer.Web-Development"),
          path: "/web-development",
        },
        {
          name: t("Footer.Mobile-Development"),
          path: "/mobile-development",
        },
        {
          name: t("Footer.Back-end-Development"),
          path: "/backend-development",
        },
        {
          name: t("Footer.Front-end-Development"),
          path: "/front-development",
        },
        {
          name: t("Footer.Careers"),
          path: "/ui-ux-design",
        },
      ],
    },
    {
      title: t("Footer.Help"),
      links: [
        {
          name: t("Footer.Blog"),
          path: "/blog",
        },
        {
          name: t("Footer.Contact"),
          path: "/contact",
        },
        {
          name: t("Footer.Faq"),
          path: "/faq",
        },
      ],
    },
    {
      title: t("Footer.Privacy-legal"),
      links: [
        {
          name: t("Footer.Privacy-Policy"),
          path: "/privacy-policy",
        },
        {
          name: t("Footer.Terms-Of-Use"),
          path: "/terms-of-service",
        },
        {
          name: t("Footer.Accessibility"),
          path: "/accessibility",
        },
      ],
    },
  ];
  return (
    <div className="text-gray-600 dark:text-white ">
      <footer className="dark:bg-gray-800 ">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img
                src="https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png"
                className="mr-5 h-20 w-20  sm:h-16"
                alt="logo"
              />
              <p className="max-w-xs mt-4 text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, accusantium.
              </p>
              <div className="flex mt-8 space-x-6 0">
                {socialMedia.map((item, i) => (
                  <a
                    key={i + 1}
                    className="hover:opacity-75 cursor-pointer"
                    href
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> {item.name} </span>
                    <span className="text-xl dark:text-white text-gray-800">
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              {BottomSection.map((item, i) => (
                <div key={i + 1}>
                  <p className="font-medium">{item?.title}</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                    {item?.links.map((link, ii) => (
                      <a
                        className=" hover:text-black hover:font-bold"
                        key={ii + 1}
                        href={link.path}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-xs ">
            © {new Date().getFullYear()} {t("Footer.company_name")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
