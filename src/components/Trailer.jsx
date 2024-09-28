import React from "react";
import Button2 from "./Button2";

const handleClick = () => {
  window.open("https://www.facebook.com/AppCon2024", "_blank");
};

const Trailer = () => {
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div
          class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 mb-5 "
          data-aos="fade-right"
        >
          <iframe
            width="610"
            height="365"
            src="https://www.youtube.com/embed/RXLRzyzdrRg?si=HtoZBHqDfVoPDIbu"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg" data-aos="fade-left">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              <span className="text-amber-600">RoadSpeak</span> AppCon 2023{" "}
              <br /> Entry Trailer{" "}
            </h1>

            <p class="mt-4 text-gray-600 dark:text-gray-400">
              Here is our short video trailer, which we used for the
              AppCon competition entry.
            </p>

            <Button2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
