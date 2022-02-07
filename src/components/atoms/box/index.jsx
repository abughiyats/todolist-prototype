export const GridBox = (props) => {
  const { name, list } = props;
  let themeBox =
    "relative text-center text-white rounded-2xl p-12 hover:ring-offset-4 hover:ring-4 hover:ring-offset-[#262A41]";
  if (list == 1) {
    themeBox += " pink-fuchsia hover:ring-pink-600";
  } else if (list == 2) {
    themeBox += " teal-blue hover:ring-teal-300";
  } else if (list == 3) {
    themeBox += " purple-violet hover:ring-purple-400";
  } else if (list == 4) {
    themeBox += " blue-sky hover:ring-blue-600";
  } else if (list == 5) {
    themeBox += " yellow-orange hover:ring-yellow-500";
  } else {
    themeBox += " bg-gray-400/20 hover:ring-gray-400/20";
  }

  return (
    <div className="flex flex-col">
      <div className={themeBox}>
        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {name
            .match(/(\b\S)?/g)
            .join("")
            .match(/(^\S|\S$)?/g)
            .join("")
            .toUpperCase()}
        </h3>
      </div>
      <label className="text-sm text-center text-[#B2B3BC] mt-2">
        {list != "" ? name : ""}
      </label>
    </div>
  );
};
