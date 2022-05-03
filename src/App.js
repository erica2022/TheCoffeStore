import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting1={"Hola"} greating2={"Aca iría"} greating3={" la lista de productos"} />
    </div>
  );
}

export default App;
