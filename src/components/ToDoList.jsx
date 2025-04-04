import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
  return (
    <div className="flex flex-col gap-2 my-3">
      {props.todos.map((item, index) => (
        <ToDoItem 
          key={index} 
          todo={item.todo} 
          isComplete={item.isComplete}
          handleEdit={(newTodo)=>props.handleEdit(index,newTodo)}
          handleDelete={() =>props.handleDelete(index)}
          handleCheckBox={()=>props.handleCheckBox(index)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
