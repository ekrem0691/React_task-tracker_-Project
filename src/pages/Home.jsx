import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import { useState, } from "react";
import data from "../helper/starterData";

const Home = () => {


  //? Başlangıç statemizi LocaleStorageden çekip state'e atadık..
  // const [tasks, setTasks] = useState(
  //   JSON.parse(localStorage.getItem("tasks")) || []
  // );
  // console.log(tasks);
  

  //! Manuel olarak starterData'dan veriyi çekip state'e atadık..
  const [tasks, setTasks] = useState(data);


  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);


  //? DELETE TASK

    const deleteTask = (id)=>{
    console.log("delete-task:", id)

    setTasks(tasks.filter((item) =>{
      return(
        item.id !== id
    )
    } ))
  }

  //? TOOGLE DONE

  const toogleDone = (id) => {

    // console.log("double Click", id);

    setTasks(tasks.map((item) =>{
      return(
        item.id === id ? {...item, isDone: !item.isDone}  : item
      )
    } ))


  };






  return (
    <div className="container">
      <Header tasks={tasks} setTasks={setTasks} />
      { tasks.length > 0 ? (<ShowTasks deleteTask={deleteTask} tasks={tasks} toogleDone={toogleDone}  />) : (<h2 className="text-center" >No Task To Show</h2>) }
      <p></p>
    </div>
  );
};

export default Home;
