import Image from "next/image";
import { LotusImage, WhereBeautyImage } from "@/assetLayer";

const WhereBeautySection: React.FC = () => {
  return (
    <div className="relative flex flex-wrap lg:flex-nowrap w-full pb-16 bg-white">
      {/* Left Content */}
      <div className="w-full lg:w-2/5 flex flex-col justify-between mb-10 lg:mb-0 pt-5">

        {/* Heading Section - Absolute Positioning to Overlap Image */}
        <div className="relative z-10" style={{ width: "150%" }}>
          {/* Container for text */}
          <div className="text-6xl !font-glorify font-bold flex flex-col">
            <div className="rounded-lg py-2">Where Beauty</div>
            <div className="rounded-lg bg-white py-2 pr-12 w-fit">
              Meets Expertise: Our
            </div>

            <div className="relative py-2 w-fit bg-white rounded-br-lg after:absolute after:w-8 after:h-8 after:shadow-[-10px_-10px_0_#fff] after:rounded-full after:bg-transparent after:-right-8 after:-top-1 after:content-[''] pr-3">
              Journey to Radiance
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-primary md:pr-10">
            At Maya Clinic, we blend cutting-edge technology with personalized
            care to reveal your true beauty. Our expert team is dedicated to
            enhancing your natural radiance with non-invasive treatments that
            cater to every aspect of your skin, hair, and body.Discover a new
            level of confidence with us in the heart of Colombo.
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-3/5 relative">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={WhereBeautyImage}
            alt="Spa treatment"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereBeautySection;
