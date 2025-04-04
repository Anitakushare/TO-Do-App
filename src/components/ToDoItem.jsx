import { useState } from "react";
import icons_delete from '../assets/icons_delete.png'
import pen from '../assets/pen.png'
const ToDoItem = (props) => {
    const [newTodo,setNewTodo]=useState(props.todo);
    const [ isEditTodo,setEditTodo]=useState(false);

    function handleSave() {
        props.handleEdit(newTodo);
        setEditTodo(false);
      }
    
    return (
      <div className="flex justify-between items-center p-2 bg-gray-200 rounded-md max-md-screen gap-4 shadow-xl/20">
              <input
                  type="checkbox"
                  checked={props.isComplete}
                  onChange={props. handleCheckBox}
                  className="mr-2" />

          {isEditTodo? (
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className=" border p-1 mr-2"
        />
      ) : (
        <p className={`text-slate-700 flex-2 ml-4 text-[17px] ${props.isComplete? 'line-through text-gray-400' : ''}`}>{props.todo}</p>
      )}


          {isEditTodo?(<button
          onClick={handleSave}
          className="text-green-500 font-medium cursor-pointer"
        >
          Save
        </button>):(<button onClick={()=>setEditTodo(true)}
          className="text-green-500 font-medium cursor-pointer"
        >
         <img src={pen} alt="" className="h-6" />
        </button>)}
        
        <button
          onClick={props.handleDelete}
          className="text-red-500 font-medium cursor-pointer "
        >
         <img src={icons_delete} alt="" className="h-6" />
        </button>
      </div>
    );
  };
  
  export default ToDoItem;
  