import task from '../assets/task.png';
function Header(){
    return(
      
       <div className=" place-self-center  max-w-md flex flex-col p-7">
               <div className="flex item-center mt-7 gap-2">
                   <img className='w-8' src={task} alt="" />
                   <h1 className="text-3xl font-semibold text-white">To-Do Lists</h1>
               </div>
               </div>
       
    )
}
export default Header;