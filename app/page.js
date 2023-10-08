"use client";
import BackgroundImage from "@/components/AppSpace/BgImage/BgImage";
import Health from "@/components/AppSpace/Booking/Health/Health";
import MainModalComponent from "@/components/AppSpace/Booking/Modal/Modal";
import BoardingPass from "@/components/AppSpace/Booking/Pass/BroadingPass";
import SeatPlane from "@/components/AppSpace/Booking/SeatPlane/SeatPlane";
import Vehicle from "@/components/AppSpace/Booking/Vehicle/Vehicle";
import EarthGlobe from "@/components/AppSpace/EarthGlobe";
import FlightPathMap from "@/components/AppSpace/Map/NavigationRoute/Navigation";
import MissionCategory from "@/components/AppSpace/Missions/Category/MissionCategory";
import MainLayout from "@/components/AppSpace/Root/Layout/MainLayout";
import SolarSystem from "@/components/AppSpace/Solar/SolarSystem";
import App from "@/components/components/App/App";
import ItemsMobile from "@/components/components/Navbar/NavMobile/ItemControler";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full h-full">
        <div className="w-full h-full">
          <BackgroundImage imageUrl="/assets/images/cosmos.png">
            <div className="pt-[10px] md:pt-[150px] text-center text-white p-4">
              <h1 className="text-5xl md:text-8xl font-bold pb-6">
                Welcome to{" "}
                <span className="text-6xl md:text-9xl text-orange-500 font-semibold">
                  AstroTitans
                </span>
              </h1>
              <p className="text-2xl md:text-4xl text-gray-300">
                Elevating a billion dreams to the cosmos.
              </p>
            </div>
          </BackgroundImage>
        </div>

        <div className="w-full h-auto px-24 py-16 bg-blue-950 opacity-70">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1 w-full h-auto px-4 py-3">
              <img
                src="/assets/images/clara.png"
                className="w-full h-auto rounded-md"
                alt="clara"
              />
            </div>
            <div className="col-span-2 md:col-span-1 w-full h-auto px-4 py-3">
              <h2 className="text-6xl text-orange-600 font-bold py-4">
                Journey to Mars: Exploring the Red Planet in 2040
              </h2>
              <div className="pt-6">
                <p className="text-[26px] text-white font-semibold pt-4 pb-3">
                  In the near-future world of 2040, Clara Klein stands at the
                  forefront of an awe-inspiring odyssey – the exploration and
                  prospective colonization of Mars. Clara, an ardent space
                  tourism enthusiast and a fervent admirer of our solar system,
                  aspires to witness humankind's first steps on Mars, a planet
                  she believes holds the key to our species' future.
                </p>
                <p className="text-[26px] text-white font-semibold pt-4 pb-3">
                  One of Clara's primary objectives is to evaluate Mars'
                  suitability for human habitation. She understands that Mars
                  offers numerous advantages, including the potential to support
                  life with the right technology and resources. Clara envisions
                  the establishment of research bases and sustainable habitats,
                  paving the way for future colonization.
                </p>
                <p className="text-[26px] text-white font-semibold py-3">
                  As Clara prepares for her historic journey to Mars in 2040,
                  she serves as an inspiration to us all. Her unwavering
                  determination, passion for space exploration, and steadfast
                  belief in the possibilities of interplanetary travel remind us
                  that the cosmos holds boundless opportunities. Clara Klein's
                  journey encapsulates the human spirit's pursuit of knowledge,
                  adventure, and the quest for a brighter future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto">
          <div className="w-full pt-16 text-center text-5xl text-gray-900 dark:text-white">
            Explore your space travel with us
          </div>
          <MissionCategory />
        </div>

        {/* <App /> */}
      </div>
    </MainLayout>
  );
}

{
  /* <div className="py-16">
        <SolarSystem />
      </div> */
}

{
  /* <h2 className="text-3xl text-center text-white font-semibold pb-8">
    //     Earth Can be destroyed by astroids?
    //   </h2>
    //   <div className="flex flex-col gap-3">
    //     <div className="flex items-center gap-2">
    //       <div className="w-10 h-10 bg-red-500 rounded-full"></div>
    //       <p className="text-xl text-center text-white font-semibold">
    //         Large & Dangerous Astroids
    //       </p>
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <div className="w-6 h-6 bg-green-500 rounded-full"></div>
    //       <p className="text-xl text-center text-white font-semibold">
    //         Small & Less Dangerous Astroids
    //       </p>
    //     </div>
    //   </div>
    //   <div className="w-full h-auto my-8">
    //     <EarthGlobe />
    //   </div>
    //   <div className="py-16">
    //     <Link href="/mars">
    //       <button className="btn btn-primary btn-lg">Explore Mars</button>
    //     </Link>
    //   </div> */
}
