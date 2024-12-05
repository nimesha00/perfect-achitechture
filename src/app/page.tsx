import DoctorProfile from "@/components/aboutUs/doctor-profile";
import PhysicalMentalSection from "@/components/aboutUs/physical-mental-section";
import RelaxationSection from "@/components/aboutUs/relaxation-section";
import TeamSection from "@/components/aboutUs/team-section";
import WhereBeautySection from "@/components/aboutUs/where-beauty-section";
import Footer from "@/components/common/footer/footer";
import HeaderNav from "@/components/common/header/header-nav";
import MaxWidthWrapper from "@/components/common/wrapper/max-width-wrapper";
import MotionWrapper from "@/components/common/wrapper/motion-wrapper";
export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <div className="sticky top-0 z-20">
        <HeaderNav />
      </div>
      <MotionWrapper>
        <div className="mt-4">
          <MaxWidthWrapper>
            <WhereBeautySection />
          </MaxWidthWrapper>
          <MaxWidthWrapper>
            <PhysicalMentalSection />
          </MaxWidthWrapper>
          <MaxWidthWrapper className="flex-1">
            <TeamSection />
          </MaxWidthWrapper>
          <div>
            <DoctorProfile />
          </div>
          <MaxWidthWrapper>
            <RelaxationSection />
          </MaxWidthWrapper>
        </div>
      </MotionWrapper>
      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
}
