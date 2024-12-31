import MobileSideBarBackground from "@/assets/images/MobileSideBarBackground";
import BottomBar from "./BottomBar";
import Steps from "./Steps";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex flex-col h-screen items-center relative">
      <Steps className="absolute top-10 w-full px-16" />
      <MobileSideBarBackground className="w-full" />
      <section className="bg-white rounded-lg p-4 w-11/12 flex justify-start -top-20 relative px-4 shadow">
        {children}
      </section>
      <BottomBar />
    </main>
  );
};

export default Layout;
