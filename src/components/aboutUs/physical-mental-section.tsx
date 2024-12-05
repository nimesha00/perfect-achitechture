import Image from "next/image";
import {
  BayLeaf,
  Greentech,
  Lightweight,
  NoAlcohol,
  PhysicalMentalImage,
  SendMessage,
} from "@/assetLayer";
import ServiceItem from "./sub-components/service-items";

const PhysicalMentalSection: React.FC = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full py-16 bg-white gap-10">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={PhysicalMentalImage}
            alt="Spa treatment"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Right Content */}

      <div className="w-full lg:w-1/2 flex flex-col justify-between mb-10 lg:mb-0">
        <section className="bg-white text-gray-800 p-8">
          <div className="mb-8">
            <h3 className="text-sm text-primaryGold font-semibold">
              Solution for body need
            </h3>
            <h1 className="text-4xl font-bold mt-2 font-glorify">
              Building Physical & Mental Health
            </h1>
            <p className="mt-4 text-textGray">
              At Maya Clinic, we believe true beauty radiates from a healthy
              body and a peaceful mind. Our treatments are designed to not only
              enhance your physical appearance but also promote overall
              wellness. Experience a range of solutions tailored to your
              body&apos;s needs, including stress-relief therapies, rejuvenating
              skin treatments, and personalized wellness plans to achieve a
              balanced, healthier you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center">
            <ServiceItem icon={BayLeaf} title="Help Relieve Pain" />
            <ServiceItem icon={NoAlcohol} title="Reduce Body Stress" />
            <ServiceItem icon={Greentech} title="Ease Chronic Plan" />
            <ServiceItem icon={Lightweight} title="Boosts Your Mood" />
          </div>

          <div className="mt-12  flex flex-row gap-3">
            <div className="w-10 h-10 relative">
              <Image src={SendMessage} alt="facebook" fill />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-sm text-textGray font-medium">
                Chat Us Anytime
              </p>
              <p className="text-xl font-semibold text-textGray">
                0112 434 343
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhysicalMentalSection;
