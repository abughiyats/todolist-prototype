import { GridBox } from "../../atoms/box";

export const Projects = (props) => {
  const { projects, loading } = props;
  const showProjects = projects.filter((item) => item.id < 6);
  const hiddenProjects = projects.filter((item) => item.id >= 6);
  console.log(projects);
  return (
    <div>
      <h5 className="text-white mb-4">
        Projects{" "}
        {loading === false && (
          <span className="text-sm font-normal text-[#56596B]">
            ({projects.length})
          </span>
        )}
      </h5>
      <div className="grid grid-cols-3 auto-cols-max gap-8">
        {loading === false &&
          showProjects.map((project) => (
            <GridBox
              key={project.id}
              list={project.id}
              name={project.project_name}
            />
          ))}
        {loading === false && (
          <GridBox
            list=""
            name={`${hiddenProjects.length}+`}
          />
        )}
      </div>
    </div>
  );
};
