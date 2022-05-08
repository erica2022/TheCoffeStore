import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/Item/Item";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting1={"Hola"} greating2={"Aca iría"} greating3={" la lista de productos"} />
      <Item/>
    </div>
  );
}

export default App;
