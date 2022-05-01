import React from "react";

function Card(props) {
  const { item } = props;

  return (
    <div className="bg-white dark:bg-gray-900  rounded-2xl dark:shadow-white dark:shadow  shadow-xl px-8 py-12 sm:px-12 lg:px-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-gardient">{item?.title}</h3>
        <p className="mb-6 ">{item?.text}</p>
        <a href="# " className="block font-medium text-orange-600">
          Know more
        </a>
      </div>
      <img
        src={item?.image}
        className="w-2/3 ml-auto -mb-12"
        alt="illustration"
        loading="lazy"
        width="900"
        height="600"
      />
    </div>
  );
}

export default Card;
