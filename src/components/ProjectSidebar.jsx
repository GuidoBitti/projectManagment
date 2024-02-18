import { useRef,useState } from "react";
import NewProjectPop from "./NewProjectPop";
import ProjectButton from "./ProjectButton";

export default function ProjectSidebar() {
  const dialog = useRef();
  const [projects, setProjects] = useState([]);
    
  function handleNewProject(){
    dialog.current.open();
  }

  function handleCreate(newProject){
    setProjects([...projects, newProject]);
  }

  return (
    <>
      <NewProjectPop 
        ref={dialog}
        onCreate={handleCreate}
      />
      <aside className="fixed top-8 -left-1 z-40 w-80 h-screen sm:translate-x-0 bg-neutral-950 rounded-lg pl-6">
        <h1 className="text-gray-100 font-bold pt-20 text-2xl">
          YOUR PROJECTS
        </h1>
        <button className="bg-neutral-800 focus:bg-neutral-800 p-3 rounded-md text-l text-gray-300 mt-8 hover:bg-neutral-700 font-semibold" onClick={handleNewProject}>
          + Add Project
        </button>

        {projects.map((project) => (
          <ProjectButton name={project.title} key={project.title} />
        ))}
      </aside>
    </>
  );
}