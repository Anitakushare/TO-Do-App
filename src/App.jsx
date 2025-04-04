import { useState } from 'react';
import ToDoList from './components/ToDoList';
import Header from './components/Header';


const App = () => {
  //this is for input
  const [todo,setTodo]=useState("");

  //this is for todo array
  const [todos,setTodos]=useState([]);

  function handleAdd(){
    if (todo.trim() !== "") {
      setTodos([...todos, { todo, isComplete: false }]);
      setTodo("");
    }
    else{
      alert("Plese fill the input field")
    }
  }
  function handleUpdate(index,newTodo){
      const updatedTodo=todos.map((item,i)=> i===index?{...item,todo:newTodo}: item);
      console.log(updatedTodo);
      setTodos(updatedTodo);
    }

  function handleDelete(index){
    const updatedTodos = todos.filter((item,task )=> task !== index);
    setTodos(updatedTodos);
    
  }
  function handleCheckBox(index){
    const checkTodo=todos.map((item,i)=>
      i===index? {...item, isComplete:!item.isComplete}:item
    );
    console.log(checkTodo);
    setTodos(checkTodo)

   

  }
  return (
    <div className='bg-gradient-to-r from-blue-800 to-indigo-900 grid py-4 min-h-screen'>
      <Header />

      <div className=" bg-gradient-to-tr from-blue-950 via-blue-950 to-gray-950 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* input and button */}
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
            type="text"
            placeholder="Add Your Task"
          />
          <button
            onClick={handleAdd}
            className="border-none rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 h-14 w-32 text-white text-lg font-medium cursor-pointer"
          >
            Add +
          </button>
        </div>
  {/* Lists Data*/}
        <ToDoList todos={todos} handleEdit={handleUpdate} handleDelete={handleDelete} handleCheckBox={handleCheckBox} />
      </div>
    </div>
  );
}

export default App;
