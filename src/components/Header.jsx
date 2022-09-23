import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "Show Add Task Bar",
    bgColor: "purple",
  });

  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: "SHOW Add Task Bar",
        bgColor: "purple",
      });
    } else {
      setBtnStyle({
        name: "CLOSE Add Task Bar",
        bgColor: "red",
      });
    }
    setShow(!show);
    
  };
  
  console.log(show);
  



  //! React, default olarak state'leri hemen degistirmeyebilir.
  //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
  //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir
  //! sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gorere yapilir.
  //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.

  //? https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates



  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button
        className="btn"
        onClick={handleShow}
        style={{ backgroundColor: btnStyle.bgColor }}
      >
       {btnStyle.name}
      </button>
      {show && <AddTaskForm />}
    </header>
  );
};

export default Header;
