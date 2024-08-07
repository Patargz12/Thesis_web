import React from "react";

const handleClick = () => {
  window.open("https://www.facebook.com/AppCon2024", "_blank");
};

const Trailer = () => {
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 mb-5 animate__animated animate__bounceInUp">
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
          <div class="lg:max-w-lg animate__animated animate__bounceInRight">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              <span className="text-amber-600">RoadSpeak</span> AppCon 2023{" "}
              <br /> Entry Trailer{" "}
            </h1>

            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Here is our short video trailer, which we used for the
              AppCon competition entry.
            </p>

            <button
              type="button"
              onClick={handleClick}
              class="focus:outline-none mt-5 text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
