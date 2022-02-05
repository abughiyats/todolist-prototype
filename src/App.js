import { Left } from "./components/organisms/left-content";
import { Right } from "./components/organisms/right-content";


function App() {
  return (
    <div className="bg-[#262A41]">
      <div className="flex justify-between p-2 h-screen w-screen space-x-2">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
