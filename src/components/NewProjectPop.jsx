import { forwardRef,useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const NewProjectPop = forwardRef(function NewProjectPop({onCreate},ref){
    const dialog = useRef()
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const [disableCreate, setDisableCreate] = useState(true);

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();
            },
        };
    });
    
    function handleCreate(){
        const newTitle = title.current.value;
        const newDescription = description.current.value;
        const newDate = date.current.value;

        onCreate(
            {
                title:newTitle, 
                description:newDescription, 
                date:Date(newDate)
            }
        );

        handleClose();
    }

    function handleClose(){
        title.current.value = '';
        description.current.value = '';
        date.current.value = '';

        handleInputChange();
        dialog.current.close();
    }

    function handleInputChange(){
        setDisableCreate(title.current.value === '' || description.current.value === '' || date.current.value === '');
    }

    return createPortal(
        <dialog className='rounded-xl px-10 pt-4 w-3/6' ref={dialog}>
            <h1 className='text-4xl text-stone-700 font-bold font-bold text-center pb-4'>Create new project</h1>
            <p className='text-lg font-semibold'>
                Title
            </p>
            <input type="text" className='w-full p-2 bg-gray-200' ref={title} onChange={handleInputChange}/>
            <p className='text-lg font-semibold'>
                Description
            </p>
            <textarea className='w-full h-40 p-2 bg-gray-200' style={{ resize: 'none' }} ref={description} onChange={handleInputChange}></textarea>
            <p className='text-lg font-semibold'>
                Date
            </p>
            <input type="date" className='w-full p-2 bg-gray-200' ref={date} onChange={handleInputChange}/>

            <div className='flex items-center'>
                <button className='rounded-md w-20 h-10 m-5 border-2 border-neutral-950 hover:bg-neutral-950 hover:text-gray-100' onClick={handleClose}>Close</button>

                <button 
                    className={`ml-auto bg-neutral-950 rounded-md w-20 h-10 m-5 text-gray-100 border-2 border-neutral-950 hover:bg-white hover:text-black ${disableCreate ? 'disabled:opacity-50 cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400' : ''}`} 
                    onClick={handleCreate} 
                    disabled={disableCreate}
                >
                    Create
                </button>
            </div>
        </dialog>,
        document.getElementById('new-project'),
    );
});

export default NewProjectPop;