import { FiMoreHorizontal } from "react-icons/fi";

export const Todolist = (props) => {
  const { time, todolist, loading } = props
  const badgeStyle = (status) => {
    let style = "inline py-1 w-24 text-center rounded-full text-sm font-semibold";
    if (status === "Approved") return style + " bg-teal-200/30 text-teal-600";
    else if (status === "In Progress") return style + " bg-sky-200/30 text-sky-600";
    else if (status === "In Review") return style + " bg-orange-200/30 text-orange-600";
    else return style + " bg-gray-200/30 text-gray-600";
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-between items-center border-b py-2">
        <h4>{time}</h4>
        <button>
          <FiMoreHorizontal className="text-2xl text-[#C9C9CF]" />
        </button>
      </div>
      {loading === false &&
        todolist.map((item) => (
          <div className="flex justify-between" key={item.id}>
            <label className="inline-flex items-center text-gray-600 font-semibold hover:underline">
              <input
                type="checkbox"
                className="h-5 w-5 accent-teal-300 mr-3 text-white"
                checked={item.label !== "Approved" ? null : true}
              />
              {item.todo_text}
            </label>
            <div className={badgeStyle(item.label)}>{item.label}</div>
          </div>
        ))}
    </div>
  );
};
