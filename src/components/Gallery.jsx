import React from "react";
import { pic1, pic2, pic3 } from "../Assets";

const Trailer = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-4 mx-auto  ">
        <h1 className="text-2xl font-semibold text-center text-amber-600 capitalize lg:text-3xl dark:text-white animate__animated animate__fadeIn ">
          Gallery
        </h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300 animate__animated animate__fadeIn">
          Here are several people that witnessed and tested the greatness of
          Roadspeak.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3 xl:grid-cols-3">
          <div
            className="overflow-hidden bg-cover rounded-lg h-96 group"
            style={{
              backgroundImage: `url(${pic1})`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                LTO PERSONNEL
              </h2>
              <p className="mt-2 text-lg tracking-wider uppercase text-amber-600">
                JOB
              </p>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg h-96 group"
            style={{
              backgroundImage: `url(${pic2})`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                JOYRIDE RIDER
              </h2>
              <p className="mt-2 text-lg tracking-wider uppercase text-amber-600">
                JOB
              </p>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg h-96 group"
            style={{
              backgroundImage: `url(${pic3})`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                DRIVING INSTRUCTOR
              </h2>
              <p className="mt-2 text-lg tracking-wider uppercase text-amber-600">
                JOB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;
