import { useState,useRef } from "react";
import Task from "./task";


const Tasks = () => {
    const inputRef = useRef(null);
    const [Tarea, setTarea] = useState([
        {
            id: 1,
            tarea: 'hacer la cama'
        },
        {
            id: 2,
            tarea: 'lavar la ropa'
        },
        {
            id: 3,
            tarea: 'dormir en la cama'
        }
    ]);
    const [newTask, setNewTask] = useState('');
    const [isEdit, setisEdit] = useState(false);
    const [temporalaTask, setTemporalTask] = useState('');

    function handleClick(){
        setTarea([...Tarea,newTask])
    }
    function handleChange(e){
        let temp = [...Tarea];
        setNewTask({
            id:temp.length+1,
            tarea:e.target.value
        })
    }
    function changeTask(id){
        const task = {...Tarea.filter(el => el.id == id)}
        setTemporalTask(task[0]);
        inputRef.current.value = task[0].tarea;
    }
    function handleClickEdit(){
        
        let temp = [...Tarea];
        const index = temp.indexOf(temporalaTask);
        temp[index].tarea = inputRef.current.value;
        setTarea(temp);
        setisEdit(false);
    }
    return (
        <>
            <div className="grid  gap-12 place-content-center " >
                <h1>mis tareas</h1>
                <div className="flex justify-center wrap">

                    <input
                        ref={inputRef}
                        onChange={handleChange} 
                        className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="agregar tarea" type="text" name="search" />
                    {
                    !isEdit ? (
                    <button
                        onClick={handleClick}
                        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"> 
                        agregar tarea
                    </button>
                    ) : (
                    <button
                        onClick={handleClickEdit}
                        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"> 
                        Editar Tarea
                    </button>
                    )}

                </div>
                {
                    Tarea.map(item => (
                        <Task key={item.id} Tarea={item} changeTask={changeTask} setisEdit={setisEdit}/>
                    ))
                }


            </div>
        </>
    );
}

export default Tasks;