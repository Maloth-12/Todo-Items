import { useContext, useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "./store/NewContext";
function Input() {
    const todoNameElement = useRef();
    const todoDateElement = useRef();
    const {eventOnItems} = useContext(TodoItemsContext);
    const onButtonClicked =(event)=>{
        event.preventDefault();
        const todoDate=todoDateElement.current.value;
        const todoName = todoNameElement.current.value;
        todoNameElement.current.value="";
        todoDateElement.current.value='';
        eventOnItems(todoName,todoDate);
    };
    return <div className="container">
                <form className="row" onSubmit={onButtonClicked}>
                    <div className="col-6"><input type="text" ref={todoNameElement}></input>
                    </div>
                    <div className="col-4"><input type="date" ref={todoDateElement}></input>
                    </div>
                    <div className="col-2"><button className="btn btn-success"><IoIosAddCircleOutline /></button></div>
                </form>
            </div>
            
}
export default Input;