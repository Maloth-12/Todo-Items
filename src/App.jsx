import Container from "./Container";
import Input from "./Input";
import Names from "./Names";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItemsContextProvider from "./store/NewContext";
function App() {
  // let[Items,setItems]= useState([]);
  /*const eventDelete = (name) => {
    const newItems = Items.filter((item) => item.name !==name);
    setItems(newItems);
  };

  const eventOnItems=(todoName,todoDate) =>{
    setItems((currentValue)=>[...currentValue,{name:todoName,date:todoDate}]);
  };*/
  

  return (
    <TodoItemsContextProvider>
    <Container>
      <h1>App</h1>
      <Input></Input>
      <Names></Names>
    </Container>
    </TodoItemsContextProvider>
  );
}
export default App;