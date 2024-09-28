import { yolo, tensorflow, roboflow, flutter, android, dart } from "../Assets";

const Tech = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="1700"
      data-aos-duration="2000"
      className="mt-12"
    >
      <div className="max-w-screen-xl px-4 md:px-8 start-0">
        <h3 className="font-semibold text-sm text-gray-600 start-0">
          TECHNOLOGIES USED
        </h3>
        <div className="mt-6 start-0">
          <ul className="flex flex-col sm:flex-row mx-auto gap-y-8 items-center sm:items-start justify-center sm:justify-start flex-wrap [&>*]:px-8 lg:divide-x">
            {/* LOGO 1 */}
            <img src={flutter} className="w-[200px] h-[40px]" />
            {/* LOGO 2 */}
            <img src={tensorflow} className="w-[240px] h-[40px]" />

            {/* LOGO 3 */}
            <img src={roboflow} className="w-[215px] h-[40px]" />

            {/* LOGO 4 */}
            <img src={yolo} className="w-[220px] h-[40px]" />
            {/* LOGO 5 */}
            <img src={dart} className="w-[220px] h-[40px]" />
            {/* LOGO 6 */}
            <img src={android} className="w-[220px] h-[40px]" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tech;
