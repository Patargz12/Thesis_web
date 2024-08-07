import React from "react";

import { certificate } from "../Assets";

const Certificate = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h1 class="text-3xl text-amber-600 font-semibold lg:text-4xl">
            Certification
          </h1>
          <p class="mt-6 text-gray-500 dark:text-gray-300">
            Here is my AppCon 2023 certificate of participation. I am proud to
            have been part of this event.
          </p>
        </div>

        <div class="flex justify-center mt-10">
          <img
            class="object-cover w-full h-full rounded-xl lg:w-4/5"
            src={certificate}
          />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
