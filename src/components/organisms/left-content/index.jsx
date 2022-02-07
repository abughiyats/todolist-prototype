import React, { useEffect } from "react";
import { FiAlignCenter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../../redux/actions";
import { Header } from "../../molecules/header-left";
import { Projects } from "../../molecules/projects";

const Left = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchProjects());
    })();
  }, []);
  console.log(state);

  return (
    <div className="w-1/2 p-4">
      <div className="p-2 bg-gray-500/50 inline-block rounded-md cursor-pointer text-white hover:bg-gray-600/50 hover:text-white/70">
        <FiAlignCenter className="text-2xl" />
      </div>
      <div className="px-44 py-12 flex flex-col space-y-12">
        <Header />
        <Projects projects={state.projects} loading={state.loading}/>
      </div>
    </div>
  );
};

export default Left;
