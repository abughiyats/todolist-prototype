import { FiAlignCenter } from "react-icons/fi";
import { Header } from "../../molecules/header";
import { Projects } from "../../molecules/projects";

export const Left = () => {
  return (
    <div className="w-1/2 p-4">
      <div className="p-2 bg-gray-500/50 inline-block rounded-md cursor-pointer text-white hover:bg-gray-600/50 hover:text-white/70">
        <FiAlignCenter className="text-2xl" />
      </div>
      <div className="px-40 py-14 flex flex-col space-y-16">
        <Header />
        <Projects />
      </div>
    </div>
  );
}