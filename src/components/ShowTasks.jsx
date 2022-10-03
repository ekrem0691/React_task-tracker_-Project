
import Duty from "./Duty";

const ShowTasks = ({tasks}) => {
  console.log(tasks, "burası");
  return <div className="text-center">
    {
      tasks.map((item, index)=>{
        return(
          <Duty key={index} duty={item} />
        )
      })
    }
    </div>
};

export default ShowTasks;
