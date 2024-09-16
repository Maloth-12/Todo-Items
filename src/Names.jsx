import { useContext } from "react";
import Item from "./Item";
import { TodoItemsContext } from "./store/NewContext";
function Names() {
    function eventHandling(event) {
        console.log("hey there");
        console.log (event);
        }
    const {Items,eventDelete} = useContext(TodoItemsContext);
    return(
        <div className="items-container">
         {Items.map((item)=>(
            <Item key={item.name}  name={item.name} date={item.date} eventDelete={eventDelete}></Item>
         ))}
        </div>
    );
}
export default Names;