import { JTherapist, Surgeon, Surgeon2, Therapist } from "@/assetLayer";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

interface TeamMember {
  name: string;
  imageSrc: any;
}

const teamMembers: TeamMember[] = [
  {
    name: "SURGEON",
    imageSrc: Surgeon,
  },
  {
    name: "SURGEON",
    imageSrc: Surgeon2,
  },
  {
    name: "THERAPIST",
    imageSrc: Therapist,
  },

  {
    name: "THERAPIST",
    imageSrc: JTherapist,
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto ">
        <div className="mb-8">
          <h3 className="text-primaryGold font-semibold text-lg">Our Team</h3>
          <div className="flex gap-2 justify-between items-center">
            <h2 className="text-4xl font-bold mt-2 text-primary font-glorify">
              Meet the Experts Behind Your Wellness Journey
            </h2>
            {/* Button */}
            <div>
              <button className="bg-primaryGold hover:bg-yellow-600 text-white font-semibold w-12 h-12 rounded-full transition-colors duration-300">
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Our team of skilled professionals is dedicated to providing
            exceptional care that enhances both your beauty and well-being.
          </p>
        </div>

        {/* Grid Layout for the team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
