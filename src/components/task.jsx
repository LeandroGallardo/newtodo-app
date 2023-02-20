const Task = ({ Tarea, changeTask,setisEdit }) => {

    function handleclick(id) {
        changeTask(id);
        setisEdit(true);
    }
    return (
        <div className="gap-3 grid flex justify-center">
            <div className=" p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{Tarea.id}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {Tarea.tarea}
                </p>
                <button type="button" onClick={()=>handleclick(Tarea.id)}
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Modificar Tarea
                </button>
            </div>
        </div>
    )
}
export default Task;