import { Header } from "../../molecules/header-right";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodolist } from "../../../redux/actions";
import { Todolist } from "../../molecules/todolist";

const users = [
  {
    img: "https://images.unsplash.com/photo-1641015525475-e7dec2514b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1638976176601-a8b643686da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1618847473021-27332d0af8e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
];
const Right = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { todolist, loading } = state;

  useEffect(() => {
    (async () => {
      await dispatch(fetchTodolist());
    })();
  }, []);

  console.log(new Date());

  const today = todolist.filter((item) =>
    item.target_date.includes("2022-02-22T18")
  );
  const upcoming = todolist.filter((item) =>
    item.target_date.includes("2022-02-23T18")
  );

  return (
    <div className="bg-white flex flex-col rounded-lg w-1/2 p-4 h-full justify-between">
      <div className="p-8 flex flex-col space-y-6">
        <Header users={users} />
        <Todolist time={"Today"} todolist={today} loading={loading} />
        <Todolist time={"Upcoming"} todolist={upcoming} loading={loading} />
      </div>
      <div className="self-end">
        <button className="bg-[#894FC6] hover:bg-[#673e92] shadow-xl shadow-purple-600/40 w-12 h-12 rounded-2xl text-white text-3xl">
          +
        </button>
      </div>
    </div>
  );
};

export default Right;
