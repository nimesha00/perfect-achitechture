import {
  Facebook,
  FooterImage,
  Instagram,
  MayaDarkLogo,
  Twitter,
  Youtube,
} from "@/assetLayer";
import Image from "next/image";
import MaxWidthWrapper from "../wrapper/max-width-wrapper";
import { IoIosHeart } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryGold ">
      <div>
        <Image src={FooterImage} alt="footer" />
      </div>
      <div className="pt-8 mx-auto">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section: Logo and Description */}
            <div>
              <div className="h-20 items-center flex">
                <Image src={MayaDarkLogo} alt="logo" width={60} height={60} />
              </div>

              <p className="text-white text-sm mb-6">
                Your studio is your one-stop for innovative beauty treatments.
                At Your Clinic, we combine experts and advanced technologies to
                deliver personalized skincare and beauty transformations.
              </p>
              <div className="flex space-x-4 mt-6">
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

            {/* Middle Section: Quick Links */}
            <div className="text-white">
              <div className="h-20 items-center flex">
                <h2 className="font-bold text-xl">Quick Links</h2>
              </div>

              <ul className="text-white text-sm space-y-2">
                <li>Phone: +94 112 325 623</li>
                <li>Email: info@yourstudio.com</li>
                <li>Address: 83/B, Main Road, Colombo, Sri Lanka</li>
              </ul>
            </div>

            {/* Right Section: Newsletter Signup */}
            <div className="text-white">
              <div className="h-20 items-center flex">
                <h2 className="font-bold text-xl">Join our Newsletter</h2>
              </div>
              <p className="text-white text-sm mt-4">
                We Won&apos;t Spam You. We Make It Better Than You&apos;d Do.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white mt-8 py-4 ">
          <MaxWidthWrapper className="text-white text-sm flex justify-between items-center">
            <p>© 2024. All Rights Reserved.</p>
            <p>
              Made by nimesha
            </p>
          </MaxWidthWrapper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
