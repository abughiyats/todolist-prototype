import { FiSearch } from "react-icons/fi";
import { InputApp } from "../../atoms/input";

export const Header = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="text-4xl text-white font-semibold">Hi Samantha</h1>
        <p className="text-[#56596B]">
          Welcome back to the workspace, we missed You!
        </p>
      </div>
      <div>
        <InputApp
          icon={<FiSearch className="text-lg" />}
          id="searchbar"
          placeholder="Search Task or Project..."
          type="text"
          className="px-12 py-3 rounded-xl bg-[#3C3F54] text-[#B2B3BC] w-full"
        />
      </div>
    </div>
  );
} 