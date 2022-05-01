import React, { lazy, useEffect } from "react";
import ThemData from "../../Resource/Theme/Data";
import { t } from "i18next";
import Nav from "../Nav/Nav";
const Card = lazy(() => import("../Card/"));
const Footer = lazy(() => import("../Footer"));
const Pricing = lazy(() => import("../Pricing"));

function Home() {
  const cardData = [
    {
      title: t("Footer.Back-end-Development"),
      text: "  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
      image:
        "https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg",
    },
    {
      title: t("Footer.Front-end-Development"),
      text: "  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
      image:
        "https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg",
    },
    {
      title: "DevOps",
      text: "  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
      image:
        "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg",
    },
  ];

  useEffect(() => {
    /*Toggle dropdown list*/
    /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;

    function check(e) {
      var target = (e && e.target) || (e && e.srcElement);

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }

    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t === elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }
  }, []);
  return (
    <div classNameName="h-screen  leading-normal tracking-normal text-white ">
      <Nav />
      <div className="pt-24">
        <div className="">
          <section class="px-2 lg:px-0     flex w-full container mx-auto pb-16">
            <div class="w-full text-white flex  flex-wrap flex-row justify-center md:justify-start text-center md:text-left">
              <div class="md:w-1/2 w-full md:mt-20">
                <h1 className="my-4 text-black dark:text-white text-5xl font-bold leading-tight">
                  {t("Home.mobile")}{" "}
                  <span class="text-gardient"> {t("Home.marketer")}</span>
                </h1>
                <p className="leading-normal text-2xl mb-8 text-black dark:text-white">
                  {t("Home.text")}
                </p>
                <button className="mx-auto gradient lg:mx-0 hover:underline dark:text-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  {t("Home.download")}{" "}
                </button>
              </div>
              <div class="md:w-1/2 mt-5 -mb-10 md:justify-center flex xssm:w-2/4 ">
                <img
                  src="https://demos.onepagelove.com/html/leno/images/header-iphone.png"
                  alt="Mobile Phone"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className=" border-b py-8 ">
        <div className="container max-w-6xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
            {t("Footer.About")}
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 dark:text-white font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-gray-600 dark:text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:{" "}
                <a
                  className="text-orange-600 underline"
                  href="https://undraw.co/"
                >
                  undraw.co
                </a>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src={ThemData.Image.Travelling} alt="Travelling imagss" />
            </div>
          </div>

          <div className="flex flex-wrap  flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src={ThemData.Image.World} alt="Travelling imagss" />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 dark:text-white font-bold leading-none mb-3">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-gray-600 dark:text-white mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                  Images from:{" "}
                  <a
                    className="text-orange-500 underline"
                    href="https://undraw.co/"
                  >
                    undraw.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" border-b py-8 bg-orange-200 dark:bg-gray-800 ">
        <div className="container max-w-6xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
            {t("Nav.Services")}
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="py-16 ">
            <div className="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-0">
              <div className="mx-auto grid gap-6 w-full md:grid-cols-2 lg:grid-cols-3">
                {cardData.map((item, i) => (
                  <Card item={item} key={i + 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" border-b py-8 ">
        <Pricing />
      </section>

      <section className=" mx-auto border-b text-center  py-6  text-gray-600 bg-orange-200 dark:bg-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold dark:text-white leading-tight text-center ">
          {t("Home.Contact Us")}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto  w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 className="my-4 text-3xl leading-tight dark:text-white">
          {t("Home.Click_message")}
        </h3>

        <button className="mx-auto gradient dark:text-white  lg:mx-0 hover:underline  font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          {t("Home.Action")}
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
