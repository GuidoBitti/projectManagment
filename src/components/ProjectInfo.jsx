import { format } from 'date-fns';

const pInfo = {
    title: "Project Title",
    date: Date.now(),
    description: "Project description lorem ipsum dolor sit amet lorem ipsum lo Project description lorem ipsum dolor sit amet lorem ipsum lo Project description lorem ipsum dolor sit amet lorem ipsum lo Project description lorem ipsum dolor sit amet lorem ipsum lo Project description lorem ipsum dolor sit amet lorem ipsum lo Project description lorem ipsum dolor sit amet lorem ipsum lo Project description lorem ipsum dolor sit amet lorem ipsum lo",
}
export default function ProjectInfo(){
    return <div className="w-screen pl-96 pt-28">
        <h1 className="text-4xl text-stone-700 font-bold font-bold">
            {pInfo.title}
        </h1>
        <p className='text-stone-400 text-md font-semibold pt-5'>
            {format(pInfo.date, 'MMM dd, yyyy')}
        </p>
        <p className='text-md font-semibold pt-5 w-10/12'>
            {pInfo.description}
        </p>
        <div class="border-t border-gray-300 w-10/12 mt-5"></div>
    </div>
}