export default function NewTask({description}){
    return <div className="w-10/12 h-16 bg-gray-300 mt-5 flex items-center">
        <p className="align-middle pl-3 font-semibold">
            {description}
        </p>
        <button className="ml-auto pr-3 font-semibold hover:text-gray-700">
            Clear
        </button>
    </div>
}