"use client"; // This line tells Next.js this is a Client Component

import React, { useState } from "react";
import FooterG from "@/components/common/footer/footerG";
import HeaderNav from "@/components/common/header/header-nav";
import MaxWidthWrapper from "@/components/common/wrapper/max-width-wrapper";
import MotionWrapper from "@/components/common/wrapper/motion-wrapper";
import "./gallery.css"; // Import the gallery styles

const Gallery: React.FC = () => {
  // State for managing the popup visibility and selected image
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState<string>("");

  // Photo data (Replace with your actual image data)
  const photos = [
    {
      src: "./assets/Img/e25.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "./assets/Img/e25.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "./assets/Img/e25.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "./assets/Img/e25.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "./assets/Img/e25.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "./assets/Img/e25.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "./assets/Img/e25.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "./assets/Img/e25.jpg",
      width: 1600,
      height: 900,
    },
  ];

  // Handle image click to open the popup
  const handleImageClick = (src: string) => {
    setPopupImage(src);
    setIsPopupOpen(true);
  };

  // Handle close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage("");
  };

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="sticky top-0 z-20">
        <HeaderNav />
      </div>

      {/* Photo Gallery Section */}
      <MaxWidthWrapper>
        <MotionWrapper>
          <div className="gallery-container grid grid-cols-3 gap-4 p-4">
            {/* Manually render images with custom onClick */}
            {photos.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={photo.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="gallery-image rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleImageClick(photo.src)} // Custom click handler
                />
              </div>
            ))}
          </div>
        </MotionWrapper>
      </MaxWidthWrapper>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="popup-content relative bg-white p-4 rounded-lg w-1/3">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white text-2xl bg-transparent border-0"
            >
              &times;
            </button>
            <img
              src={popupImage}
              alt="Popup Image"
              className="max-w-full max-h-96 object-contain" // Ensuring the image fits within the popup
            />
          </div>
        </div>
      )}

      {/* Footer Section */}
      <FooterG />
    </main>
  );
};

export default Gallery;
