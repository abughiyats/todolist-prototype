export const Projects = () => {
  return (
    <div>
      <h1 className="text-white mb-4">
        Projects <span>(13)</span>
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {["GH", "CP", "EC", "TA", "LP", "8+"].map((grid, id) => (
          <div key={id} className="flex flex-col items-center space-y-2">
            <div className="bg-pink-500 rounded-lg w-full h-full p-4 text-2xl font-bold hover:ring-offset-4 hover:ring-4 hover:ring-offset-[#262A41] hover:ring-pink-200">
              {grid}
            </div>
            <label>{grid}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
