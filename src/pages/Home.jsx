import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import { useState, useEffect } from "react";
// import data from "../helper/starterData";

const Home = () => {


  //? Başlangıç statemizi LocaleStorageden çekip state'e atadık..
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  console.log(tasks);
  

  //! Manuel olarak starterData'dan veriyi çekip state'e atadık..
  // const [tasks, setTasks] = useState(data);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks />
    </div>
  );
};

export default Home;
