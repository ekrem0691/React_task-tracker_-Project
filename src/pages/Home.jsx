
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import { useState } from "react";
import data from "../helper/starterData";


const Home = () => {
  
  const [tasks, setTasks] = useState(data);
  console.log(tasks);
  
  return (
    <div>
      <Header tasks = {tasks} />
      <ShowTasks />
    </div>
  ); 
};

export default Home;

