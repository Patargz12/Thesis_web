import React from "react";

const Hero = () => {
  return (
    <div
      class="container mt-16 flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 items-center lg:flex-row lg:items-center"
      id="hero"
    >
      <div
        class="w-full lg:w-1/2 flex items-center justify-center "
        data-aos="fade-right"
      >
        <div class="lg:max-w-lg">
          <h1 class="text-3xl font-semibold tracking-wide dark:text-white lg:text-4xl  ">
            A <span className="text-amber-600">mobile app</span> that has object
            detection and text-to-speech technology
          </h1>
          <p class="mt-4 text-gray-600 dark:text-gray-300 font-semibold">
            It detects traffic signs and reads them out loud for the driver to
            aware them about the signages around them and prevent misfortunes.
          </p>
          <div class="grid gap-6 mt-8 sm:grid-cols-2">
            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3 text-amber-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">User Friendly</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200 ">
              <svg
                class="w-5 h-5 mx-3 text-amber-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Offline functionality</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3 text-amber-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">97% accuracy rate</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3 text-amber-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Cross Platform</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3 text-amber-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Power Saving</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3 text-amber-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Cooling Management</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center w-full h-96 lg:w-1/2"
        data-aos="fade-left"
      >
        <iframe
          width="610"
          height="365"
          src="https://www.youtube.com/embed/SFh3r9DLFII?si=Z_de9IbhrZ69Xgs0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
