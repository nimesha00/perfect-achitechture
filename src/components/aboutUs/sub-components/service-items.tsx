import Image from "next/image";
import React from "react";

interface ServiceItemProps {
  icon: any;
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="p-2 border border-primaryMintGreen  rounded-full flex items-center">
        <Image src={icon} alt="facebook" width={20} height={20} />
      </div>
      <h4 className="text-lg text-primaryMintGreen">{title}</h4>
    </div>
  );
};

export default ServiceItem;
