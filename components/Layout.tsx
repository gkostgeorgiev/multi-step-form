import MobileSideBarBackground from "@/assets/images/MobileSideBarBackground";
import React, { useEffect } from "react";
import Steps from "./Steps";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //   useEffect(() => {
  //     console.log(window.innerWidth); // Safe to access here
  //   }, []);

  if (typeof window !== "undefined") {
    console.log(window.innerWidth);
  }

  return (
    <main className="flex flex-col h-screen items-center relative">
      <Steps className="absolute top-10 w-full px-16" />
      <MobileSideBarBackground className="w-full" />
      <section className="bg-white rounded-lg p-4 w-11/12 flex justify-start -top-20 relative px-4">
        {children}
      </section>
      <div className="bg-white fixed bottom-0 w-full py-6 px-4 grid grid-cols-7">
        <div className="col-span-2 flex items-center text-light-gray font-ubuntu-bold text-lg tracking-tight">Go back</div>
        <button className="font-ubuntu-regular text-white bg-[#15498a] py-3 rounded col-span-2 col-start-6">Next Step</button>
      </div>
    </main>
  );
};

export default Layout;
