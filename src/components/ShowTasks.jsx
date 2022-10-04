
import Duty from "./Duty";

const ShowTasks = ({tasks, deleteTask, toogleDone}) => {
  console.log(tasks, "burası");
  return <div className="text-center">
    {
      tasks.map((item, index)=>{
        return(
          <Duty deleteTask={deleteTask} key={index} duty={item} toogleDone={toogleDone}  />
        )
      })
    }
    </div>
};

export default ShowTasks;
