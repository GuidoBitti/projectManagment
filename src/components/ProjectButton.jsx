export default function ProjectButton({name}){
    return <p>
        <button className="w-60 h-10 mt-4 pl-3 bg text-gray-100 text-md font-semibold font-medium hover:bg-neutral-700 text-left rounded-md">
            {name}
        </button>
    </p>
}