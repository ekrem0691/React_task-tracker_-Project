import AddTaskForm from "./AddTaskForm";

const Header = () => {
 
  //! React, default olarak state'leri hemen degistirmeyebilir.
  //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
  //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir
  //! sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gorere yapilir.
  //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.

  //? https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates

 

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button>BUTTON</button>
      <AddTaskForm/>
    </header>
  );
};

export default Header;
