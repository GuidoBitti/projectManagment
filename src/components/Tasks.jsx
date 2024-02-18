import NewTask from "./NewTask"

export default function Tasks(){
    return <div className="w-full pl-96 pt-5 mb-5">
        <h1 className="text-3xl text-stone-700 font-bold">
            Tasks
        </h1>
        {/*form?*/}
        <input type="text" className="w-80 h-10 bg-gray-300 mt-3 p-3 font-semibold" />
        <button className="ml-3 text-stone-800 hover:text-stone-700 hover:bg-gray-100 p-2 rounded-md text-md font-semibold">
            Add Task
        </button>
        <NewTask description="Task nueva numero 1"/>
        <NewTask description="Task nueva numero 2"/>
        <NewTask description="Task nueva numero 3"/>
        <NewTask description="Task nueva numero 4"/>
    </div>
}