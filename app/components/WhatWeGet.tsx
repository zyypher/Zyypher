import FeatureSvg from "./images/FeatureSvg";
import ScalableSvg from "./images/ScalableSvg";
import TailorMade from "./images/TailorMade";

const WhatYouGet = () => {
  return (
    <section
      id="what-you-get"
      className="bg-black py-16 px-8 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-wide font-semibold text-sm text-lightGreen">
          What you’ll get
        </p>
        <h2 className="text-white text-3xl md:text-4xl mt-4 leading-tight font-light">
          We resolve problems associated with creative procedures.
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-end bg-gradient-to-b from-[#1e1e1e] to-[#141414] rounded-[30px] p-10 h-[420x] border border-[#1f1f1f]">
          <div
            className="w-[240px] h-[180px] flex justify-center items-center overflow-hidden"
          >
            <FeatureSvg />
          </div>
          <h3 className="text-gray-200 text-lg font-semibold mt-6">
            Cost-effective solution
          </h3>
          <p className="text-gray-400 mt-2 text-center">
            Get high-quality design work at a fraction of the cost.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center justify-end bg-gradient-to-b from-[#1e1e1e] to-[#141414] rounded-[30px] p-10 h-[429px] border border-[#1f1f1f]">
          <div
            className="w-[240px] h-[180px] flex justify-center items-center overflow-hidden"
          >
           <TailorMade />
          </div>
          <h3 className="text-gray-200 text-lg font-semibold mt-6">
            Tailor–made design
          </h3>
          <p className="text-gray-400 mt-2 text-center">
            We've got the expertise to make your vision a reality.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center justify-end bg-gradient-to-b from-[#1e1e1e] to-[#141414] rounded-[30px] p-10 h-[429px] border border-[#1f1f1f]">
          <div
            className="w-[240px] h-[180px] flex justify-center items-center overflow-hidden"
          >
          <ScalableSvg />
          </div>
          <h3 className="text-gray-200 text-lg font-semibold mt-6">
            Scalable as you grow
          </h3>
          <p className="text-gray-400 mt-2 text-center">
            We’re ready to meet your evolving needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
