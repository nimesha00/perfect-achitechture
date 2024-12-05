import Image from "next/image";
import {
  PlayButton,
  RelaxationImage,
  RelaxationUserImage1,
  RelaxationUserImage2,
  RelaxationUserImage3,
} from "@/assetLayer";

const RelaxationSection: React.FC = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full py-16 bg-white">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between mb-10 lg:mb-0">
        <div>
          <p className="text-primaryGold font-semibold text-sm mb-2">
            Best Of The World
          </p>
          <h1 className="text-4xl font-bold mb-4 font-glorify">
            The Ultimate Relaxation
          </h1>
          <p className="text-gray-500 mb-8">
            Ullamcorper a lacus vestibulum sed. Ligula ullamcorper malesuada
            proin libero nunc consequat interdum varius sit amet.
          </p>
        </div>

        <div>
          {/* Ratings & Info */}
          <div className="flex justify-start items-center space-x-10 mb-8">
            <div className="text-center text-primaryMintGreen flex flex-col gap-4 uppercase">
              <h2 className="text-5xl font-semibold ">4.4</h2>
              <p>150 Ratings</p>
            </div>
            <div className="text-center text-primaryMintGreen flex flex-col gap-4 uppercase">
              <h2 className="text-5xl font-semibold">25K</h2>
              <p>Worldwide Customers</p>
            </div>
            <div className="text-center text-primaryMintGreen flex flex-col gap-4 uppercase">
              <div className="flex items-center ">
                <Image
                  src={RelaxationUserImage1}
                  alt="user1"
                  width={44}
                  height={44}
                  className="border border-white rounded-full z-0"
                />
                <Image
                  src={RelaxationUserImage2}
                  alt="user2"
                  width={44}
                  height={44}
                  className="border border-white rounded-full -ml-3 z-10"
                />
                <Image
                  src={RelaxationUserImage3}
                  alt="user3"
                  width={44}
                  height={44}
                  className="border border-white rounded-full -ml-3 z-20"
                />
                <div className="w-11 h-11 border border-white bg-green-300 text-white rounded-full -ml-3 z-30 justify-center items-center flex">
                  +20
                </div>
              </div>

              <p>Qualified Team</p>
            </div>
          </div>
        </div>

        {/* Watch Procedure Button */}
        <div className="flex items-center">
          <button className="relative w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-4">
            <Image src={PlayButton} alt="Watch" width={60} height={60} />
            <span className="sr-only">Play Video</span>
          </button>
          <div>
            <p className="text-sm text-gray-500">Our Process</p>
            <p className="font-semibold text-lg">Watch Our Procedure</p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={RelaxationImage}
            alt="Spa treatment"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RelaxationSection;
