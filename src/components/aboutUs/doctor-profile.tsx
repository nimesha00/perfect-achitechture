import Image from "next/image";
import MaxWidthWrapper from "../common/wrapper/max-width-wrapper";
import { DoctorImg, Facebook, Instagram, Twitter, Youtube } from "@/assetLayer";

const DoctorProfile: React.FC = () => {
  return (
    <section className="bg-primaryGold ">
      <MaxWidthWrapper>
        <div className="mt-10 relative mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Doctor Information */}
          <div className="text-white max-w-md md:max-w-lg space-y-6 py-12">
            <h4 className="text-lg">Senior Surgeon</h4>
            <h2 className="text-4xl font-bold font-glorify">Carla Calzoni</h2>
            <p className="text-lg leading-relaxed">
              "We are dedicated to enhancing physical beauty and holistic
              well-being. Every journey is unique, and we provide transformative
              care that nurtures the body, mind, and spirit. Our personalized
              treatments inspire confidence and promote lasting wellness,
              ensuring an exceptional experience for each person."
            </p>

            {/* Specialization */}
            <div className="space-y-2">
              <div className=" pl-4 text-lg flex items-center gap-3">
                <div className="w-10 h-1 bg-white"></div>
                <p>HAIR & SKIN SPECIALIST</p>
              </div>
              <div className=" pl-4 text-lg flex items-center gap-3">
                <div className="w-10 h-1 bg-white"></div>
                <p>PLASTIC SURGERY</p>
              </div>
            </div>

            <div className="flex flex-row gap-10 items-center my-auto mt-6">
              {/* Social Media Icons */}
              <div className="flex space-x-4 ">
                <a
                  href="#"
                  className="p-2 border border-white  rounded-full flex items-center"
                >
                  <Image src={Facebook} alt="facebook" width={20} height={20} />
                </a>
                <a
                  href="#"
                  className="p-2 border border-white rounded-full flex items-center"
                >
                  <Image src={Twitter} alt="twitter" width={20} height={20} />
                </a>
                <a
                  href="#"
                  className="p-2 border border-white rounded-full flex items-center"
                >
                  <Image
                    src={Instagram}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="#"
                  className="p-2 border border-white rounded-full flex items-center"
                >
                  <Image src={Youtube} alt="youtube" width={20} height={20} />
                </a>
              </div>


            </div>
          </div>

          {/* Right Section - Doctor Image */}
          <div className="relative md:absolute md:right-0 md:bottom-0 md:w-auto">
            <img
              src={DoctorImg.src} // Update the path to the correct image file
              alt="Carla Calzoni"
              className="object-cover "
              style={{ height: "580px" }} // Adjust height as per design
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DoctorProfile;
